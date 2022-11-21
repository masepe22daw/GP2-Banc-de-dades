import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table'
import { ContingutComponent } from './components/contingut/contingut.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSortModule } from '@angular/material/sort';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';
import { GraficsComponent } from './components/grafics/grafics.component';
import { SliceWordsPipe } from './components/tabla-datos/slice-words.pipe';
import { NumberDecimalPipe } from './components/tabla-datos/number-decimal.pipe';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { IniciComponent } from './components/inici/inici.component';

=======
import { MatSelectModule } from '@angular/material/select';
>>>>>>> 2673950f7a44d62ea535805e9b79937b0744c9f5



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContingutComponent,
    FooterComponent,
    TablaDatosComponent,
    GraficsComponent,
    SliceWordsPipe,
    NumberDecimalPipe,
<<<<<<< HEAD
    IniciComponent,
=======


>>>>>>> 2673950f7a44d62ea535805e9b79937b0744c9f5
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
<<<<<<< HEAD
    AppRoutingModule

=======
    AppRoutingModule,
    MatSelectModule,
>>>>>>> 2673950f7a44d62ea535805e9b79937b0744c9f5
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
