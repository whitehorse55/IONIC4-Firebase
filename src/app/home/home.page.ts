import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.user = {
      type: ''
    };

    const uId = this.userService.getAuthUser().uid;
    this.userService.getUser(uId).subscribe(user => {
      this.user = user;
    });
  }

}
