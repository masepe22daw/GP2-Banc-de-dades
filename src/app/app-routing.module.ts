import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './components/inici/inici.component';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';

const routes: Routes = [
  {
    path: '',
    component: IniciComponent
  },
  {
    path: 'Dades',
    component: TablaDatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
