import { Component, OnInit } from '@angular/core';
import {Geoname, ResponseUsers} from '../interfaces/interfaces';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  cities: Geoname[];
  users: ResponseUsers;

  constructor(private _citiesService: UserService,
              public modalController: ModalController) {
    this.cities = [];
    this.users = null;
  }

  ngOnInit(){
    //this.uploadCities();
    this.uploadUsers();
  }

  async presentModal(user: any){
    const modal = await this.modalController.create({
      component: Tab2Page,
      cssClass: 'my-custom-class',
      componentProps: {
       user: user
      }
    });
    return await modal.present();
  }

  uploadUsers(event?){
    this._citiesService.getUsers().subscribe(
      resp =>{
        this.users = resp;
      },
      error =>{
        console.log(error);
        
      },
      () =>{

      }
    );
  }

  uploadCities(event?){
    this._citiesService.getCities().subscribe(
      resp =>{
        console.log(resp);
        this.cities.push(...resp.geonames);
        
      },
      error =>{
        console.log(error);
        
      },
      ()=>{

      }
    );
  }
}
