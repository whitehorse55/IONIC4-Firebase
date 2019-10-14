import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'trade',
            children: [
              {
                path: '',
                loadChildren: '../trade/trade.module#TradePageModule'
              }
            ]
          },
          {
            path: 'favorites',
            children: [
              {
                path: '',
                loadChildren: '../favorites/favorites.module#FavoritesPageModule'
              }
            ]
          },
          {
            path: 'newOffers',
            children: [
              {
                path: '',
                loadChildren: '../newoffers/newoffers.module#NewoffersPageModule'
              }
            ]
          },
          {
            path: 'config',
            children: [
              {
                path: '',
                loadChildren: '../config/config.module#ConfigPageModule'
              }
            ]
          },
          {
            path: '',
            redirectTo: 'home/trade',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
