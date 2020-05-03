import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { ApiService } from "./services/api.service";
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultadoComponent,
    DetallePaisComponent,
    InfoGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
