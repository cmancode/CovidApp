import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  public pais: any;

  constructor(private activeRoute: ActivatedRoute, private apiService: ApiService) {
      
   }

  ngOnInit() {
    this.buscarPais();
  }

  private buscarPais() {
    this.activeRoute.params.subscribe(param => {
      this.apiService.getPais(param['criterio']).then(data => {
        console.log(data);
        this.setPais(data);
      });
    });
  }

  private setPais(pais: any) {
    this.pais = pais;
  }

}
