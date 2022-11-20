import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table' 
import { ContingutComponent } from './components/contingut/contingut.component';
import { FooterComponent } from './components/footer/footer.component';
import { BolaDelMonComponent } from './components/bola-del-mon/bola-del-mon.component';
import { MatSortModule } from '@angular/material/sort';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';
import { GraficsComponent } from './components/grafics/grafics.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContingutComponent,
    FooterComponent,
    BolaDelMonComponent,
    TablaDatosComponent,
    GraficsComponent,
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
    MatSortModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
