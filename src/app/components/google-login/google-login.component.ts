import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {

  @Output()
  userInfo: EventEmitter<firebase.auth.UserCredential> = new EventEmitter<firebase.auth.UserCredential>();

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() { }

  async nativeGoogleLogin(): Promise<firebase.auth.UserCredential> {
    try {

      const gplusUser = await this.gplus.login({
        webClientId: '535388546940-orpqs76g6g9albdfeuunprbbi9lavej4.apps.googleusercontent.com',
        offline: true,
        scopes: 'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));

    } catch (err) {
      console.log(err);
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.userInfo.emit(credential);
    } catch (err) {
      console.log(err);
    }

  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin().then(info => {
        this.userInfo.emit(info);
      });
    } else {
      this.webGoogleLogin();
    }
  }

}
