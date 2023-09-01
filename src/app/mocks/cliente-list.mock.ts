import { Cliente } from '../models';
import { SituacaoCpf } from '../models/situacao-cpf.enum';
import { TipoConta } from '../models/tipo-conta.enum';

export const clienteListMock: Cliente[] = [
  {
    cpf: '53603215710',
    nome: 'Mariane de Souza Oliveira',
    situacaoCpf: SituacaoCpf.regular,
    cooperativa: 'Cooperativa Viacredi',
    contas: [
      {
        tipo: TipoConta.aplicação,
        numero: '557932-4',
        banco: 'Cooperativa Viacredi',
      },
      {
        tipo: TipoConta.corrente,
        numero: '778461-8',
        banco: 'Cooperativa Sicredi',
      },
    ],
  },
  {
    cpf: '26186605361',
    nome: 'Clara Carolina Oliveira',
    situacaoCpf: SituacaoCpf.irregular,
    cooperativa: 'Cooperativa Sicred',
    contas: [
      {
        tipo: TipoConta.aplicação,
        numero: '557932-4',
        banco: 'Cooperativa Supercredi',
      },
    ],
  },
  {
    cpf: '64364525162',
    nome: 'Jéssica Elisa Isabella Vieira',
    situacaoCpf: SituacaoCpf.irregular,
    cooperativa: 'Cooperativa Morar',
    contas: [
      {
        tipo: TipoConta.corrente,
        numero: '557932-4',
        banco: 'Cooperativa Morar',
      },
    ],
  },
  {
    cpf: '55037879949',
    nome: 'João Levi Rezende',
    situacaoCpf: SituacaoCpf.regular,
    cooperativa: 'Cooperativa Rezende',
    contas: [
      {
        tipo: TipoConta.corrente,
        numero: '557932-4',
        banco: 'Cooperativa Rezende',
      },
      {
        tipo: TipoConta.poupança,
        numero: '557932-4',
        banco: 'Cooperativismo',
      },
    ],
  },
];
