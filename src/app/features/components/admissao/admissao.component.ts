import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, finalize } from 'rxjs';

import { Cliente } from 'src/app/models';
import { ClienteService } from 'src/app/services/cliente.service';
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
  isLoading: boolean;

  constructor(
    private clienteService: ClienteService,
    private form: FormBuilder,
    private notFoundValidator: NotFoundValidator
  ) {}

  ngOnInit(): void {
    this.createAdmissaoForm();
  }

  getClienteByCpf() {
    this.isLoading = true;

    this.cliente$ = this.clienteService
      .getClienteByCpf(this.cpf)
      .pipe(finalize(() => (this.isLoading = false)));
  }

  createAdmissaoForm() {
    this.admissaoForm = this.form.group({
      cpf: [
        '',
        {
          validator: [Validators.required],
          asyncValidators: [this.notFoundValidator.validateNotFound()],
          updateOn: 'blur',
        },
      ],
    });
  }

  getMessageError(control: AbstractControl, campo?: string): any {
    switch (true) {
      case control.hasError('required'):
        return `${campo} é obrigatório.`;
      case control.hasError('notFound'):
        return `${campo} não encontrado.`;
    }
  }
}
