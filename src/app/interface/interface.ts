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
