import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './components/inici/inici.component';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';
import { GraficsComponent } from './components/grafics/grafics.component';

const routes: Routes = [
  {
    path: '',
    component: IniciComponent
  },
  {
    path: 'Dades',
    component: TablaDatosComponent
  },
  {
    path: 'Grafics',
    component: GraficsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
