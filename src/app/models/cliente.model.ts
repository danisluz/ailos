import { Conta } from './conta.model';
import { SituacaoCpf } from './situacao-cpf.enum';

export interface Cliente {
  id: number,
  nome: string,
  cpf: string,
  situacaoCpf: SituacaoCpf,
  cooperativa: string,
  contas: Conta[],
}