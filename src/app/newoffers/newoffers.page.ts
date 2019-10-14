import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OfferService } from '../api/offer.service';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-newoffers',
  templateUrl: './newoffers.page.html',
  styleUrls: ['./newoffers.page.scss'],
})
export class NewoffersPage implements OnInit {

  user: any;
  searchKey = '';
  offerList: any;
  filterdOffer: any = [];

  constructor(public navCtrl: NavController,
              private offerServcie: OfferService,
              private userService: UserService) { }

  ngOnInit() {
    const uId = this.userService.getAuthUser().uid;
    this.userService.getUser(uId).subscribe(user => {
      this.user = user;
      if (user.type === 'company') {
        this.loadOfferList(user.id);
      } else {
        this.loadOfferList('');
      }
    });

  }

  loadOfferList(companyId: string) {
    if (companyId === '') {
      this.offerServcie.getOffers().subscribe(offers => {
        this.offerList = offers;
        this.filterdOffer = offers;
      });
    } else {
      this.offerServcie.getOffersByCompany(companyId).subscribe(offers => {
        this.offerList = offers;
        this.filterdOffer = offers;
      });
    }
  }

  searchItems() {
    this.filterdOffer = this.offerList.filter(item => {
      return item.companyName.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
      item.description.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ;
    });
  }
}
