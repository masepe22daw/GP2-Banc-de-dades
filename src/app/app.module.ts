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
import { IniciComponent } from './components/inici/inici.component';
import { MatSelectModule } from '@angular/material/select';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
=======
>>>>>>> 7ebfd4087a3260b79e9e17edcb3cb5a9c168e36c
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



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

    IniciComponent,
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
    AppRoutingModule,
    MatSelectModule,
<<<<<<< HEAD
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
=======
    MatInputModule,
    MatFormFieldModule

>>>>>>> 7ebfd4087a3260b79e9e17edcb3cb5a9c168e36c
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
