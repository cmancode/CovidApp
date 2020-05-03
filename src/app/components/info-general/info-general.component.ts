import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'Info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})
export class InfoGeneralComponent implements OnInit {

  public datosgobales: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllData().then(data => {
      this.setDatosGlobales(data);
    });
  }

  private setDatosGlobales(datosgobales:any) {
    this.datosgobales = datosgobales;
  }

}
