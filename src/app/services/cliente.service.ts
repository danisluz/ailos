import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models';
import { clienteListMock } from '../mocks/cliente-list.mock';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  getClientes(): Observable<Cliente[]> {
    return of(clienteListMock);
  }

  getClienteByCpf(cpf: string): Observable<Cliente | null> {
    const clienteFound = clienteListMock.find(cliente => cliente.cpf === cpf);
    
    return of(clienteFound || null);
  }

}


// debauceTime
// escrever documentação com cpfs validos

// enum tipo de conta poupanca/corrente/conjunta/aplicacao