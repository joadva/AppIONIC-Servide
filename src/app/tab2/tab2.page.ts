import { Component, Input, OnInit } from '@angular/core';
import { ResponseUsers, Address, Company } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @Input() user: ResponseUsers;
  address: Address;
  company: Company;
  constructor() { 
    this.user = null;
  }


  ngOnInit(){
    this.address = this.user.address;
    this.company = this.user.company;
  }

}