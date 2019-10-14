import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
})
export class TradePage implements OnInit {

  searchKey = '';
  companyList: any;
  filteredCompany: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadCompanyList();
  }

  loadCompanyList() {
    this.userService.getCompanies().subscribe(companies => {
      this.companyList = companies;
      this.filteredCompany = this.companyList;
    });
  }

  searchItems() {
    this.filteredCompany = this.companyList.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1;
    });
  }

}
