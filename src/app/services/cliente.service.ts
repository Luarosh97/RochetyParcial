import { Injectable } from '@angular/core';
import { Cliente } from '../../app/credito/models/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {


  }
  get(): Cliente[] {
    return JSON.parse(localStorage.getItem('datos'));
  }

  add(cliente: Cliente) {
    let clientes: Cliente[] = [];
    if (this.get() != null) {
      clientes = this.get();
    }
    clientes.push(cliente);
    localStorage.setItem('datos', JSON.stringify(clientes));
  }

}
