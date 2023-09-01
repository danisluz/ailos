import { Cliente } from '../models';
import { SituacaoCpf } from '../models/situacao-cpf.enum';
import { TipoConta } from '../models/tipo-conta.enum';

export const clienteListMock:Cliente[] = [
  {
    cpf: '53603215710',
    nome: 'Mariane de Souza Oliveira',
    situacaoCpf: SituacaoCpf.Regular,
    cooperativa: 'Cooperativa Viacredi',
    contas: [
      {
        tipo: TipoConta.Aplicação,
        numero: '557932-4',
        banco: 'Cooperativa Viacredi'
      },
      {
        tipo: TipoConta.Corrente,
        numero: '778461-8',
        banco: 'Cooperativa Sicredi'
      }
    ],
  },
  {
    cpf: '26186605361',
    nome: 'Clara Carolina Oliveira',
    situacaoCpf: SituacaoCpf.Irregular,
    cooperativa: 'Cooperativa Sicred',
    contas: [
      {
        tipo: TipoConta.Aplicação,
        numero: '557932-4',
        banco: 'Cooperativa Supercredi'
      }
    ],
  }
]