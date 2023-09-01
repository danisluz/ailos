import { TestBed, async } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = new ClienteService();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um array de clientes', () => {
    service.getClientes().subscribe((clientes) => {
      expect(clientes).toBeTruthy();
      expect(clientes.length).toBeGreaterThan(0);
    });
  });

  it('deve retornar um cliente pelo CPF', () => {
    const cpfParaEncontrar = '53603215710';
    service.getClienteByCpf(cpfParaEncontrar).subscribe((cliente) => {
      expect(cliente).toBeTruthy();
      expect(cliente?.cpf).toBe(cpfParaEncontrar);
    });
  });

  it('deve verificar se o CPF existe', () => {
    const cpfParaVerificar = '53603215710';
    service.checkHasCpf(cpfParaVerificar).subscribe((temCpf) => {
      expect(temCpf).toBe(true);
    });

    const cpfInexistente = '99999999999';
    service.checkHasCpf(cpfInexistente).subscribe((temCpf) => {
      expect(temCpf).toBe(false);
    });
  });
});