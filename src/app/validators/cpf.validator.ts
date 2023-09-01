import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export function cpfValidator(
  control: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
    const cpf = control.value;

    if (!isValidCPF(cpf)) {
      resolve({ invalid: true });
    } else {
      resolve(null);
    }
  });
}

export function isValidCPF(cpf: string): boolean {
  if (!cpf) return false;

  cpf = cpf.replace(/[^\d]+/g, ''); // remove todos os caracteres não numéricos

  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Aplica o algoritmo de validação de CPF
  let sum = 0;
  let remainder: number;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}
