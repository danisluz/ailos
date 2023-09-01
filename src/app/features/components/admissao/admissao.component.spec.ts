import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmissaoComponent } from './admissao.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { of } from 'rxjs';
import { Cliente } from 'src/app/models';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SituacaoCpf } from 'src/app/models/situacao-cpf.enum';
import { TipoConta } from 'src/app/models/tipo-conta.enum';
import { IconsModule } from 'src/app/shared/icons/icons.module';

describe('AdmissaoComponent', () => {
  let component: AdmissaoComponent;
  let fixture: ComponentFixture<AdmissaoComponent>;
  let clienteService: ClienteService;

  const clienteMock: Cliente = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissaoComponent],
      imports: [
        RouterModule,
        IconsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
      ],
      providers: [provideNgxMask()],
    });

    fixture = TestBed.createComponent(AdmissaoComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set error for CPF when not found', fakeAsync(() => {
    spyOn(clienteService, 'getClienteByCpf').and.returnValue(of(null));
    const cpfField = component.admissaoForm.get('cpf');
    cpfField?.setValue('12345678900');
    component.getClienteByCpf();
    tick();

    expect(cpfField?.hasError('notFound')).toBe(true);
  }));

  it('should not set error for valid CPF', fakeAsync(() => {
    spyOn(clienteService, 'getClienteByCpf').and.returnValue(of(clienteMock));
    const cpfField = component.admissaoForm.get('cpf');
    cpfField?.setValue('53603215710');
    component.getClienteByCpf();
    tick();

    expect(cpfField?.hasError('notFound')).toBe(false);
  }));
});
