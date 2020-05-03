import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  // @Input('datos') paises: any[] = [];
  public paises: any[] = [];
  public p: number = 1;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    // console.log(this.paises);
    this.apiService.getAllCountries().then(data => {
      this.setPaises(data);
    });
  }

  public buscarPais(pais: string) {
    this.router.navigate(['/pais', pais]);
  }

  private setPaises(datos:any) {
    this.paises = datos;
  }

}
