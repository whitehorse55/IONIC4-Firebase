import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public onLoginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateForward('/signup/user');
  }

  goToHome() {

    this.loadingCtrl.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });

    // static test value setting
    // this.onLoginForm.setValue({
    //   email: 'goldsnake2100@outlook.com',
    //   password: '123456'
    // });
    ////////////////////////////////////
    this.userService.loginUser(this.onLoginForm.value)
      .then(res => {
        console.log(res);
        this.loadingCtrl.dismiss();
        this.navCtrl.navigateRoot('/home/trade');
      }, async err => {
        this.loadingCtrl.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Warning',
          subHeader: 'Login Failed',
          message: err.message,
          buttons: ['OK']
        });
        await alert.present();
      });
  }

  socialUserInfo(event: firebase.auth.UserCredential) {
    this.userService.getUser(event.user.uid).subscribe(
      user => {
      if (user == null) {
        this.userService.addUser({
          email: event.user.email,
          avatar: '',
          city: '',
          description: '',
          name: event.user.displayName,
          phone1: '',
          phone2: '',
          sectors: [],
          type: 'person'
        }, event.user.uid);

      }
    },
    error => {
      this.userService.addUser({
        email: event.user.email,
        avatar: '',
        city: '',
        description: '',
        name: event.user.displayName,
        phone1: '',
        phone2: '',
        sectors: [],
        type: 'person'
      }, event.user.uid);
    });
  }

}
