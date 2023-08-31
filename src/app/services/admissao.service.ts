import { Injectable } from '@angular/core';
import { Admissao } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissaoService {

  // getAdmissao(): Observable<Admissao>{

  //   const admissaoMock: Admissao = {
  //     nome: 'Daniel',
  //     cpf: '782657832465',
  //     cliente: {
  //       nome: 'daniel'
  //     }
  //   } 

  //   return of(admissaoMock)
  // }


}


// debauceTime
// escrever documentação com cpfs validos

// cpf enum situação regular/irregular

// enum tipo de conta poupanca/corrente/conjunta/aplicacao