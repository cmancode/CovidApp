import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';


const routes: Routes = [
  { path: '', component: InfoGeneralComponent },
  { path: 'mundo', component: InfoGeneralComponent },
  { path: 'lista', component: ResultadoComponent },
  { path: 'pais/:criterio', component: DetallePaisComponent },
  { path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
