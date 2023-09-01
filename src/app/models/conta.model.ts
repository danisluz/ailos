import { TipoConta } from './tipo-conta.enum';

export interface Conta {
  tipo: TipoConta;
  numero: string;
  banco: string;
}
