import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { TrendingService } from '../api/trending.service';
import { OfferService, Offer } from '../api/offer.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  searchKey = '';
  offerList: any = [];
  filterdOffer: any = [];
  userId: string;

  constructor(private userService: UserService, private trendingService: TrendingService, private offerService: OfferService) {
    this.userId = userService.getAuthUser().uid;
    this.loadFavoriteList();
  }

  ngOnInit() {
  }

  loadFavoriteList() {
    this.trendingService.getFavoritesByUser(this.userId).subscribe(favoriteList => {
      favoriteList.forEach(favorite => {
        this.offerService.getOffer(favorite.offerId).subscribe(offer => {
          this.offerList.push(offer);
          this.filterdOffer.push(offer);
        });
      });
    });
  }

  searchItems() {
    this.filterdOffer = this.offerList.filter(item => {
      return item.companyName.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
      item.description.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ;
    });
  }

}
