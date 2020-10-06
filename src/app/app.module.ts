import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteConsultaComponent } from './Credito/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './Credito/cliente-registro/cliente-registro.component';
import { FooterComponent } from './credito/footer/footer.component';
import { NavmenuComponent } from './credito/navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteConsultaComponent,
    ClienteRegistroComponent,
    FooterComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
