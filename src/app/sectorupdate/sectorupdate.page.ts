import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sectorupdate',
  templateUrl: './sectorupdate.page.html',
  styleUrls: ['./sectorupdate.page.scss'],
})
export class SectorupdatePage implements OnInit {

  public sectorsarray: Array<string>;
  public selectedSectors: Array<string>;

  constructor(public navCtrl: NavController, private userService: UserService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sectorsarray = [];
    this.selectedSectors = [];
    this.generateSectorsArray();
    this.getUserInfo();
  }

  getUserInfo() {
    const userId = this.userService.getAuthUser().uid;
    this.userService.getUser(userId).subscribe(user => {
      this.selectedSectors = user.sectors;
    });
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

  update() {
    const userId = this.userService.getAuthUser().uid;
    this.userService.getUser(userId).subscribe(userDoc => {
      this.userService.updateUser({
        id: userDoc.id,
        avatar: userDoc.avatar,
        city: userDoc.city,
        description: userDoc.description,
        email: userDoc.email,
        name: userDoc.name,
        phone1: userDoc.phone1,
        phone2: userDoc.phone2,
        sectors: this.selectedSectors,
        type: userDoc.type
      });
      this.navCtrl.pop();
    });
  }

}
