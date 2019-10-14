import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage,
    children: [
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../usersignup/usersignup.module#UsersignupPageModule'
          }
        ]
      },
      {
        path: 'company',
        children: [
          {
            path: '',
            loadChildren: '../companysignup/companysignup.module#CompanysignupPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'signup/user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPage]
})
export class SignupPageModule { }
