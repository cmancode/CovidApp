import { Injectable } from '@angular/core';
import { NovelCovid } from "novelcovid";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private track:NovelCovid  = new NovelCovid();

  constructor() { 
    console.log("Servicio Cargado...");
  }

  public getAllData() {
    return this.track.all();
  }

  public getAllCountries() {
    return this.track.countries(null, { sort: 'cases' });
  }

  public getPais(pais: string) {
    return this.track.countries(pais);
  }

}
