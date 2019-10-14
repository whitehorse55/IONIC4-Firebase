import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(public navCtrl: NavController, private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logoutUser();
    this.navCtrl.navigateRoot('/');
  }

  gotoSectorUpdates() {
    this.navCtrl.navigateForward('/sectorupdate');
  }

  gotoCities() {
    this.navCtrl.navigateForward('/cities');
  }

  gotoFavoriteTrades() {
    this.navCtrl.navigateRoot('/home/favorites');
  }

}
