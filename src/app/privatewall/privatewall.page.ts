import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../api/user.service';
import { OfferService } from '../api/offer.service';
import { TrendingService, Follow } from '../api/trending.service';
import { ToastController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privatewall',
  templateUrl: './privatewall.page.html',
  styleUrls: ['./privatewall.page.scss'],
})
export class PrivatewallPage implements OnInit {

  searchKey = '';
  companyData: User;
  offerList: any;
  filterdOffer: any = [];
  userId: string;
  isFollow: boolean;
  currentFollowId: string;

  constructor(private offerService: OfferService,
              private trendingService: TrendingService,
              private userService: UserService,
              private toastCtrl: ToastController,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.queryParams.subscribe(params => {
                  if (this.router.getCurrentNavigation().extras.state) {
                    this.companyData = this.router.getCurrentNavigation().extras.state.companyData;
                    this.loadOfferList(this.companyData);
                    this.checkFollow(this.companyData.id);
                  }
                });

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

  checkFollow(companyId: string) {
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

  searchItems() {
    this.filterdOffer = this.offerList.filter(item => {
      return item.companyName.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
      item.description.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ;
    });
  }

}
