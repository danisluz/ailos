import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AdmissaoComponent } from './admissao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { NotFoundValidator } from 'src/app/validators/cpfNotFound.validator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Cliente } from 'src/app/models';
import { SituacaoCpf } from 'src/app/models/situacao-cpf.enum';
import { TipoConta } from 'src/app/models/tipo-conta.enum';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';


describe('AdmissaoComponent', () => {
  let component: AdmissaoComponent;
  let fixture: ComponentFixture<AdmissaoComponent>;
  let clienteService: ClienteService;
  let notFoundValidator: NotFoundValidator;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissaoComponent],
      imports: [
        FontAwesomeModule, 
        FormsModule, 
        ReactiveFormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        SharedModule
      ],
      providers: [ClienteService, NotFoundValidator, provideNgxMask()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissaoComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    notFoundValidator = TestBed.inject(NotFoundValidator);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário', () => {
    component.ngOnInit();
    expect(component.admissaoForm).toBeTruthy();
    expect(component.isLoading).toBeFalsy();
  });

  it('deve verificar se o CPF é válido', () => {
    expect(component.isCpfValid('123')).toBeFalsy();
    expect(component.isCpfValid('53603215710')).toBeTruthy();
  });
});
