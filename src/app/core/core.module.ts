import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmissaoComponent } from './admissao/admissao.component';

@NgModule({
  declarations: [
    AdmissaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

  ]
})
export class CoreModule { }
