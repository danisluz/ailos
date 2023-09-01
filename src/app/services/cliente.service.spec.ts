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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of clients', () => {
    service.getClientes().subscribe((clientes) => {
      expect(clientes).toBeTruthy();
      expect(clientes.length).toBeGreaterThan(0);
    });
  });

  it('should return a client by CPF', () => {
    const cpfToFind = '53603215710';
    service.getClienteByCpf(cpfToFind).subscribe((cliente) => {
      expect(cliente).toBeTruthy();
      expect(cliente?.cpf).toBe(cpfToFind);
    });
  });

  it('should check if CPF exists', () => {
    const cpfToCheck = '53603215710';
    service.checkHasCpf(cpfToCheck).subscribe((hasCpf) => {
      expect(hasCpf).toBe(true);
    });

    const nonExistentCpf = '99999999999';
    service.checkHasCpf(nonExistentCpf).subscribe((hasCpf) => {
      expect(hasCpf).toBe(false);
    });
  });
});
