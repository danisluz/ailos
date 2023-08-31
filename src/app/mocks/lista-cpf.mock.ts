import { Cliente } from '../models';
import { SituacaoCpf } from '../models/situacao-cpf.enum';

export const clienteListMock:Cliente[] = [
  {
    id: 1,
    nome: 'Mariane de Souza Oliveira',
    cpf: '11122233344',
    situacaoCpf: SituacaoCpf.Regular,
    cooperativa: 'Cooperativa Viacredi',
    contas: [
      {
        tipo: 'aplicação',
        numero: '557932-4',
        banco: 'Cooperativa Viacredi'
      },
      {
        tipo: 'corrente',
        numero: '778461-8',
        banco: 'Cooperativa Sicredi'
      }
    ],
  },
  {
    id: 2,
    nome: 'Clara Carolina Oliveira',
    cpf: '26186605361',
    situacaoCpf: SituacaoCpf.Irregular,
    cooperativa: 'Cooperativa Sicred',
    contas: [
      {
        tipo: 'aplicação',
        numero: '557932-4',
        banco: 'Cooperativa Supercredi'
      },
      {
        tipo: 'corrente',
        numero: '778461-8',
        banco: 'Cooperativa Poacredi'
      }
    ],
  }
]