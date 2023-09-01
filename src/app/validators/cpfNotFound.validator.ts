import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ClienteService } from '../services/cliente.service';

@Injectable({ providedIn: 'root' })
export class NotFoundValidator {
  constructor(private clienteService: ClienteService) {}

  validateNotFound(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const cpf = control.value;

      return this.clienteService.checkHasCpf(cpf).pipe(
        map((found: boolean) => {   
          if (!found && cpf) {
            return { notFound: true };
          } else {
            return null
          }
        }),
        catchError(() => of(null))
      );
    };
  }
}