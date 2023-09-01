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

  getClienteByCpf(cpf: string): Observable<Cliente | undefined> {
    const clienteFound = clienteListMock.find(cliente => cliente.cpf === cpf);
    return of(clienteFound);
  }

  checkHasCpf(cpf: string): Observable<boolean> {
    return of(clienteListMock.some(item => item.cpf === cpf));
  }

}