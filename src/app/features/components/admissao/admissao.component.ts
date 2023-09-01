import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models';
import { ClienteService } from 'src/app/services/cliente.service';
import { cpfValidator, isValidCPF } from 'src/app/validators/cpf.validator';
import { NotFoundValidator } from 'src/app/validators/cpfNotFound.validator';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss'],
})
export class AdmissaoComponent implements OnInit {
  cpf: string;
  cliente$: Observable<Cliente>;
  admissaoForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private form: FormBuilder,
    private notFoundValidator: NotFoundValidator
  ) {}

  ngOnInit(): void {
    this.createAdmissaoForm();
  }

  getClienteByCpf() {
    this.cliente$ = this.clienteService.getClienteByCpf(this.cpf);
  }

  isValidCPF() {
    if (isValidCPF(this.admissaoForm.get('cpf')?.value)) {
      this.admissaoForm.get('cpf')?.setErrors(null);
      return true;
    } else {
      return false;
    }
  }

  createAdmissaoForm() {
    this.admissaoForm = this.form.group({
      cpf: ['', {
        validator: [Validators.required], 
        asyncValidators: [this.notFoundValidator.validateNotFound()],
        updateOn: 'blur',
      }],
    });
  }

  getMessageError(control: AbstractControl, campo?: string): any {
    switch (true) {
      case control.hasError('required'):
        return `${campo} é obrigatório.`;
      case control.hasError('notFound'):
        return `${campo} não encontrado.`
    }
  }
}
