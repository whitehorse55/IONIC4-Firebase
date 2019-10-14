import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeItemComponent } from './trade-item/trade-item.component';
import { IonicModule } from '@ionic/angular';
import { OfferItemComponent } from './offer-item/offer-item.component';
import { TradeItemDetailComponent } from './trade-item-detail/trade-item-detail.component';
import { GoogleLoginComponent } from './google-login/google-login.component';



@NgModule({
  declarations: [
    TradeItemComponent,
    OfferItemComponent,
    TradeItemDetailComponent,
    GoogleLoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TradeItemComponent,
    OfferItemComponent,
    TradeItemDetailComponent,
    GoogleLoginComponent
  ]
})
export class ComponentsModule { }
