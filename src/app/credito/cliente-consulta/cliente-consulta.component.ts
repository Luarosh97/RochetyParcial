import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import {Cliente} from '../models/cliente';
 
@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {

  constructor(private clienteService : ClienteService) { }
  clientes = []; 
  ngOnInit(): void {
    this.get();
  }
  get(){
    this.clientes= this.clienteService.get();
  }
}
