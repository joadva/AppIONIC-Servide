import { Injectable, Query } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiUrl } from "src/environments/environment";
import { ResponseCities } from "../interface/interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getCities() {
    var pathAllcities =
      "/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
    return this.executeQuery<ResponseCities>(pathAllcities);
  }

  private executeQuery<T>(query: string) {
    query = ApiUrl + query;
    return this._http.get<T>(query);
  }
}
