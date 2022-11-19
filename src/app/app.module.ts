import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table' 
import { ContingutComponent } from './components/contingut/contingut.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { BolaDelMonComponent } from './components/bola-del-mon/bola-del-mon.component';
import { TaulaComponent } from './components/taula/taula.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContingutComponent,
    SliderComponent,
    FooterComponent,
    BolaDelMonComponent,
    TaulaComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
