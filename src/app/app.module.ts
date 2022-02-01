import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
//import { CardComponent } from './shared/components/card/card.component';

//import { AcumuladorComponent } from './shared/components/acumulador/acumulador.component';
//import { CronometroComponent } from './shared/components/cronometro/cronometro.component';

const exportComponents = [


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagenesComponent,
    ContactoComponent//,    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
