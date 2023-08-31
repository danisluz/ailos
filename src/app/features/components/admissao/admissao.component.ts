import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {

  clientes: Cliente[];
  cpf: string;
  clienteEncontrado: Cliente | null;
  admissaoForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private _fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.createAdmissaoForm();
  }
  
  getClientes(){
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
    console.log(this.clientes);
  }
  
  getClienteByCpf() {
    this.clienteService.getClienteByCpf(this.cpf).subscribe(cliente => {
      this.clienteEncontrado = cliente;
      console.log(this.clienteEncontrado);
    });
  }

  createAdmissaoForm() {
    this.admissaoForm = this._fb.group({
      cpf: ['', Validators.required]
    });
  }

}
