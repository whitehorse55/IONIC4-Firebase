import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from '../api/user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-companysignup',
  templateUrl: './companysignup.page.html',
  styleUrls: ['./companysignup.page.scss'],
})
export class CompanysignupPage implements OnInit {

  public onCompanySingupForm: FormGroup;
  companyLogo = '';
  croppedImagepath = '';
  isLoading = false;
  uploadedFileUrl: string;
  options: any;
  sectorsarray: Array<string>;
  selectedSectors: Array<string>;
  company: User;

  validationMessages = {
    companyname: [
      { type: 'required', message: 'Company name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    address: [
      { type: 'required', message: 'Address is required.' },
    ],
    city: [
      { type: 'required', message: 'City is required.' },
    ],
    phone1: [
      { type: 'required', message: 'Phone1 is required.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private crop: Crop,
    private camera: Camera,
    private file: File,
    private afs: AngularFireStorage,
    private userService: UserService) { }

  ngOnInit() {
    this.onCompanySingupForm = this.formBuilder.group({
      companyname: [null, Validators.compose([
        Validators.required
      ])],
      address: [null, Validators.compose([
        Validators.required
      ])],
      city: [null, Validators.compose([
        Validators.required
      ])],
      email: [null, Validators.compose([
        Validators.required
      ])],
      phone1: [null, Validators.compose([
        Validators.required
      ])],
      phone2: [''],
      officetime: [''],
      password: [null, Validators.compose([
        Validators.required
      ])]
    });

    this.companyLogo = 'assets/img/app_logo.png';

    this.sectorsarray = [];
    this.selectedSectors = [];

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

  getImages() {

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
    this.crop.crop(imgPath, { quality: 50 })
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
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }
  uploadImage() {
    console.log(this.onCompanySingupForm);
    this.loadingCtrl.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    const filePath = 'user/' + new Date().getTime() + '.jpg';
    const fileRef = this.afs.ref(filePath);
    const task = fileRef.putString(this.croppedImagepath, 'data_url').then(() => {

      fileRef.getDownloadURL().subscribe(url => {
        this.uploadedFileUrl = url;
        this.doSignup();
      });

    });

  }

  doSignup() {

    const companyInfo = this.onCompanySingupForm.value;
    this.company = {
      name: companyInfo.companyname,
      avatar: this.uploadedFileUrl,
      city: companyInfo.city,
      description: companyInfo.officetime,
      email: companyInfo.email,
      phone1: companyInfo.phone1,
      phone2: companyInfo.phone2,
      sectors: this.selectedSectors,
      type: 'company'
    };

    this.userService.registerUser(companyInfo)
      .then(res => {
        console.log(res);
        this.loadingCtrl.dismiss();
        this.userService.addUser(this.company, res.user.uid);
        this.navCtrl.navigateRoot('/home/trade');
      }, async err => {
        console.log(err);
        this.loadingCtrl.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Warning',
          subHeader: 'Signup Failed',
          message: err.message,
          buttons: ['OK']
        });
        await alert.present();
      });

  }
}
