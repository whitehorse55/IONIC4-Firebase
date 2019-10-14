import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  selectedCity: string;

  constructor(private userService: UserService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.selectedCity = '';
    this.getUserInfo();
  }

  getUserInfo() {
    const userId = this.userService.getAuthUser().uid;
    this.userService.getUser(userId).subscribe(user => {
      this.selectedCity = user.city;
    });
  }

  update() {
    const userId = this.userService.getAuthUser().uid;
    console.log('userid ==> ' + userId);
    this.userService.getUser(userId).subscribe(userDoc => {
      this.userService.updateUser({
        id: userDoc.id,
        avatar: userDoc.avatar,
        city: this.selectedCity,
        description: userDoc.description,
        email: userDoc.email,
        name: userDoc.name,
        phone1: userDoc.phone1,
        phone2: userDoc.phone2,
        sectors: userDoc.sectors,
        type: userDoc.type
      });
      this.navCtrl.pop();
    });
  }

}
