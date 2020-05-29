import { Provider } from "@angular/core";

export interface ResponseCities {
  geonames: Geoname[];
}

export interface Geoname {
  lng: number;
  geonameid: number;
  countrycode: string;
  name: string;
  fcIname: string;
  toponymName: string;
  fcodeName: string;
  wikipedia: string;
  lat: number;
  fcl: string;
  population: number;
  foce: string;
}

export interface RootObject {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}
