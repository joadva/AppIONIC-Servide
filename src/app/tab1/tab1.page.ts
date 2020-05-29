import { Component, OnInit } from "@angular/core";
import { Geoname } from "../interface/interface";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  cities: Geoname[];

  constructor(private _citiesService: UserService) {
    this.cities = [];
  }

  ngOnInit() {
    this.uploadCities();
  }

  uploadCities(event?) {
    this._citiesService.getCities().subscribe(
      (resp) => {
        console.log(resp);
        this.cities.push(...resp.geonames);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
