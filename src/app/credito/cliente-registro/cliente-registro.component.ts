import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  constructor(private clienteService : ClienteService) { }
  cliente : Cliente;
  ngOnInit(): void {
    this.cliente=new Cliente;
  }
  add(){
    this.cliente.Calcularcapital();
    alert('Cliente registrado con exito'+ JSON.stringify(this.cliente));
   this.clienteService.add(this.cliente);
        
  }
}
