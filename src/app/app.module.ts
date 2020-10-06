import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteConsultaComponent } from './Credito/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './Credito/cliente-registro/cliente-registro.component';
import { FooterComponent } from './credito/footer/footer.component';
import { NavmenuComponent } from './credito/navmenu/navmenu.component';
import { HomeComponent } from './credito/home/home.component';
import {ClienteService}  from '../app/services/cliente.service'

@NgModule({
  declarations: [
    AppComponent,
    ClienteConsultaComponent,
    ClienteRegistroComponent,
    FooterComponent,
    NavmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
