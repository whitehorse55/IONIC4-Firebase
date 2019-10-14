import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.scss'],
})
export class SectorsPage implements OnInit {

  public title: string;
  public sectorsarray: Array<string>;
  public selectedSectors: Array<string>;
  public selectedCity: string;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  constructor(public navCtrl: NavController, private userService: UserService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sectorsarray = [];
    this.selectedSectors = [];

    this.title = 'Select favorite sectors';
    this.selectedCity = '';
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

  pageChanged() {
    this.slides.getActiveIndex().then(index => {
      if (index === 0) {
        this.title = 'Select favorite sectors';
      } else {
        this.title = 'Select your city';
      }
    });
  }

  gotoHome() {
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
        sectors: this.selectedSectors,
        type: userDoc.type
      });
      this.navCtrl.navigateRoot('/home/trade');
    });
  }
}
