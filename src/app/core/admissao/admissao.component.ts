import { Component, OnInit } from '@angular/core';
import { Admissao, Cliente } from 'src/app/models';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {

  cliente: Cliente;
  admissao: Admissao;

  constructor() { }

  ngOnInit() {
  }

}
