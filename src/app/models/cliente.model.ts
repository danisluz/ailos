import { Conta } from './conta.model';
import { SituacaoCpf } from './situacao-cpf.enum';

export interface Cliente {
  cpf: string;
  nome: string;
  situacaoCpf: SituacaoCpf;
  cooperativa: string;
  contas: Conta[];
}
