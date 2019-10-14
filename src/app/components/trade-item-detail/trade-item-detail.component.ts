import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/api/offer.service';
import { TrendingService } from 'src/app/api/trending.service';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-trade-item-detail',
  templateUrl: './trade-item-detail.component.html',
  styleUrls: ['./trade-item-detail.component.scss'],
})
export class TradeItemDetailComponent implements OnInit {

  @Input()
  set offer(lOffer: Offer) {
    this.mOffer = lOffer;
    this.getFavorites();
    this.checkFavorite();
    this.getOfferViews();
    this.checkOfferViews();
  }

  mOffer: Offer;
  userId: string;
  // favorites
  countFavorite: number;
  isFavorite: boolean;
  favoriteId: string;

  // offer views
  countOfferViews: number;
  isOfferViews: boolean;
  offerViewId: string;

  constructor(private trendingService: TrendingService, private userService: UserService) {
    this.userId = userService.getAuthUser().uid;
    this.isFavorite = false;
    this.isOfferViews = false;
  }

  ngOnInit() {}

  share() {
    console.log('called share');
  }

  // favorites
  changeFavorite() {
    if (this.isFavorite) {
      this.trendingService.deleteFavorite(this.favoriteId);
      this.isFavorite = false;
      this.favoriteId = '';
    } else {
      this.trendingService.addFavorite({
        userId: this.userId,
        offerId: this.mOffer.id
      });
      this.isFavorite = true;
    }
  }

  getFavorites() {
    this.trendingService.getFavorites(this.mOffer.id).subscribe(favorites => {
      this.countFavorite = favorites.length;
    });
  }

  checkFavorite() {
    this.trendingService.isFavorite(this.userId, this.mOffer.id).subscribe(favorites => {
      if (favorites.length > 0) {
        this.isFavorite = true;
        this.favoriteId = favorites[0].id;
      }
    });
  }

  // offer views
  changeOfferViews() {
    if (this.isOfferViews) {
      this.trendingService.deleteOfferViews(this.offerViewId);
      this.isOfferViews = false;
      this.offerViewId = '';
    } else {
      this.trendingService.addOfferViews({
        userId: this.userId,
        offerId: this.mOffer.id
      });
      this.isOfferViews = true;
    }
  }

  getOfferViews() {
    this.trendingService.getOfferViews(this.mOffer.id).subscribe(offerViews => {
      this.countOfferViews = offerViews.length;
    });
  }

  checkOfferViews() {
    this.trendingService.isOfferViews(this.userId, this.mOffer.id).subscribe(offerViews => {
      if (offerViews.length > 0) {
        this.isOfferViews = true;
        this.offerViewId = offerViews[0].id;
      }
    });
  }

}
