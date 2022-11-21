import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
>>>>>>> 2673950f7a44d62ea535805e9b79937b0744c9f5
})
export class AppRoutingModule { }
