import { Component, OnInit, Input } from '@angular/core';
import { User, UserService } from 'src/app/api/user.service';
import { OfferService, Offer } from 'src/app/api/offer.service';
import { TrendingService, Favorite, Follow } from 'src/app/api/trending.service';
import { ToastController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.scss'],
})
export class TradeItemComponent implements OnInit {

  @Input()
  set company(company: User) {
    this.companyData = company;
    this.loadOfferList(company);
    this.checkFavorite(company.id);
  }

  companyData: User;
  offerList: any;
  userId: string;
  isFollow: boolean;
  currentFollowId: string;

  constructor(private offerService: OfferService,
              private trendingService: TrendingService,
              private userService: UserService,
              private toastCtrl: ToastController,
              private navCtrl: NavController) {
                this.userId = userService.getAuthUser().uid;
                this.isFollow = false;
                this.currentFollowId = '';
              }

  ngOnInit() {

  }

  loadOfferList(company: User) {
    this.offerService.getOffersByCompany(company.id).subscribe(list => {
      this.offerList = list;
    });
  }

  checkFavorite(companyId: string) {
    this.trendingService.isFollow(this.userId, companyId).subscribe(follows => {
      if (follows.length > 0) {
        this.isFollow = true;
        this.currentFollowId = follows[0].id;
      } else {
        this.isFollow = false;
      }
    });
  }

  changeFollow() {
    const follow: Follow = {
      userId: this.userId,
      companyId: this.companyData.id
    };
    if (this.isFollow) {
      this.trendingService.deleteFollow(this.currentFollowId);
      this.showToast('Unfollowed this trade.');
    } else {
      this.trendingService.addFollow(follow);
      this.showToast('Followed this trade.');
    }
  }

  async showToast(content: string) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      message: content,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  gotoPrivateWall() {
    const navigationExtras: NavigationExtras = {
      state: {
        companyData: this.companyData
      }
    };
    this.navCtrl.navigateForward('/privatewall', navigationExtras);
  }
}
