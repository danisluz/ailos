import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {

  clientes: Cliente[];

  constructor(private admissaoService: ClienteService) { }

  ngOnInit(): void {
  }
  
  getClientes(){
    this.admissaoService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
    console.log(this.clientes);
  }

}
