import { Cliente } from './cliente.model';

export interface Admissao {
  nome: string,
  cpf: string,
  situacaoCpf: string,
  cliente: Cliente,
  contas: [],
}