import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'sectors', loadChildren: './sectors/sectors.module#SectorsPageModule' },
  { path: 'cities', loadChildren: './cities/cities.module#CitiesPageModule' },
  { path: 'trade', loadChildren: './trade/trade.module#TradePageModule' },
  { path: 'companysignup', loadChildren: './companysignup/companysignup.module#CompanysignupPageModule' },
  { path: 'offerpublication', loadChildren: './offerpublication/offerpublication.module#OfferpublicationPageModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  { path: 'newoffers', loadChildren: './newoffers/newoffers.module#NewoffersPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'usersignup', loadChildren: './usersignup/usersignup.module#UsersignupPageModule' },
  { path: 'sectorupdate', loadChildren: './sectorupdate/sectorupdate.module#SectorupdatePageModule' },
  { path: 'privatewall', loadChildren: './privatewall/privatewall.module#PrivatewallPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
