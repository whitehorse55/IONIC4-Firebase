import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { UserService, User } from '../api/user.service';
import { async } from 'q';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.page.html',
  styleUrls: ['./usersignup.page.scss'],
})
export class UsersignupPage implements OnInit {

  public onUserSignupForm: FormGroup;
  user: User;

  validationMessages = {
    username: [
      { type: 'required', message: 'Username is required'}
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
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
    private userService: UserService) { }

  ngOnInit() {
    this.onUserSignupForm = this.formBuilder.group({
      username: [null, Validators.compose([
        Validators.required
      ])],
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

  signup() {
    const userInfo = this.onUserSignupForm.value;
    this.user = {
      name: userInfo.username,
      email: userInfo.email,
      type: 'person',
      avatar: '',
      sectors: [],
      city: '',
      description: '',
      phone1: '',
      phone2: ''
    };

    this.userService.registerUser(userInfo)
    .then(res => {
      console.log(res.user.uid);
      this.userService.addUser(this.user, res.user.uid);
      this.userService.loginUser(userInfo);
      this.navCtrl.navigateRoot('/sectors');
    }, async err => {
      console.log(err);
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
