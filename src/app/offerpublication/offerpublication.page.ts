import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { OfferService, Offer } from '../api/offer.service';
import { UserService } from '../api/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-offerpublication',
  templateUrl: './offerpublication.page.html',
  styleUrls: ['./offerpublication.page.scss'],
})
export class OfferpublicationPage implements OnInit {

  newOfferForm: FormGroup;
  newOffer: Offer;

  defaultImage = 'assets/img/frame.png';
  imageResponse: Array<string>;
  options: any;
  sectorsarray: Array<string>;
  selectedSectors: Array<string>;
  uploadedFiles: Array<string>;

  isLoading = false;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  validationMessages = {
    description: [
      { type: 'required', message: 'Description is required.' },
      { type: 'maxlength', message: 'Description must be upto 150 characters long.' }
    ]
  };

  constructor(private crop: Crop,
    private file: File,
    private camera: Camera,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private afs: AngularFireStorage,
    private af: AngularFirestore,
    private offerService: OfferService,
    private userService: UserService) { }

  ngOnInit() {
    this.newOfferForm = this.formBuilder.group({
      description: [null, Validators.compose([
        Validators.required,
        Validators.maxLength(150)
      ])]
    });

    this.imageResponse = [];
    this.sectorsarray = [];
    this.selectedSectors = [];
    this.uploadedFiles = [];

    this.generateSectorsArray();
  }

  private generateSectorsArray() {
    for (let i = 0; i < 17; i++) {
      this.sectorsarray.push('sector' + i);
    }
  }

  clickSector(sector: string) {
    if (this.selectedSectors.includes(sector)) {
      this.selectedSectors.splice(this.selectedSectors.indexOf(sector), 1);
    } else {
      this.selectedSectors.push(sector);
    }
  }

  takePicture() {
    if (this.imageResponse.length >= 3) {
      this.showToast();
      return;
    }
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(imageData => {
      this.cropImage(imageData);
    });
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      showCloseButton: false,
      message: 'Image can add upto 3',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  getImages() {
    if (this.imageResponse.length >= 3) {
      this.showToast();
      return;
    }
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then(imageData => {
      this.cropImage(imageData);
    });
  }
  cropImage(imgPath) {
    // alert(imgPath);
    this.crop.crop(imgPath, {
      targetHeight: 180,
      targetWidth: 240, quality: 50
    })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0]);
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    const copyPath = ImagePath;
    const splitPath = copyPath.split('/');
    const imageName = splitPath[splitPath.length - 1];
    const filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.imageResponse.push(base64);
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  removeImage(index) {
    this.imageResponse.splice(index - 1, 1);
  }

  offerPublish() {

    this.uploadImage();

  }

  uploadImage() {

    this.loadingCtrl.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    for (let i = 0; i < this.imageResponse.length; i++) {
      const filePath = 'offer/' + i + new Date().getTime() + '.jpg';
      const fileRef = this.afs.ref(filePath);
      console.log(this.imageResponse[i]);
      fileRef.putString(this.imageResponse[i], 'data_url').then(() => {

        fileRef.getDownloadURL().subscribe(url => {
          this.uploadedFiles.push(url);
          if (this.uploadedFiles.length === this.imageResponse.length) {
            this.doPublish();
          }
        });

      }).catch(async error => {
        console.log(error);
        const toast = await this.toastCtrl.create({
          showCloseButton: true,
          message: error,
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
      });
    }

  }

  doPublish() {
    const companyId = this.userService.getAuthUser().uid;
    this.userService.getUser(companyId).subscribe(company => {
      const openDescription = this.newOfferForm.value.description;

      this.newOffer = {
        companyId: company.id,
        companyName: company.name,
        companyAvatar: company.avatar,
        description: openDescription,
        media: this.uploadedFiles,
        sectors: this.selectedSectors,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };

      this.offerService.addOffer(this.newOffer);
      this.loadingCtrl.dismiss();
      this.navCtrl.pop();
    });
  }
}
