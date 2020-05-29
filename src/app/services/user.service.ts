import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'src/environments/environment';
import { ResponseUsers, ResponseCities } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getCities(){
    var pathAllCities= "/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
    return this.executeQuery<ResponseCities>(pathAllCities);
  }
  
  getUsers(){
    var pathAllUsers="/users";
    return this.executeQuery<ResponseUsers>(pathAllUsers);
  }

  private executeQuery<T>(query: string){
    query = ApiUrl + query;
    return this._http.get<T>(query);
  }
}
