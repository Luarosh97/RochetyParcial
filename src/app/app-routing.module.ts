import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ClienteConsultaComponent}from'./credito/cliente-consulta/cliente-consulta.component';
import{ClienteRegistroComponent}from'./credito/cliente-registro/cliente-registro.component';
import{HomeComponent}from'./credito/home/home.component';

const routes: Routes = [
  { path : '/', component : HomeComponent},
    { path: 'clienteConsulta', component:ClienteConsultaComponent },
    { path: 'clienteRegistro', component: ClienteRegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
