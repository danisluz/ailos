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
import { IconProp } from '@fortawesome/fontawesome-svg-core';


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
          validators: [Validators.required],
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

  getIconAndClassForSituation(situacaoCpf: string): { icon: IconProp; cssClass: string } {
    if (situacaoCpf === 'Regular') {
      return { icon: ['fas', 'check-circle'], cssClass: 'icon-verde' };
    } else if (situacaoCpf === 'Irregular') {
      return { icon: ['fas', 'circle-exclamation'], cssClass: 'icon-laranja' };
    } else {
      return { icon: ['far', 'circle-exclamation'], cssClass: 'icon-cinza' };
    }
  }
}
