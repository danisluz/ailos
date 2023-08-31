import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmissaoComponent } from './admissao/admissao.component';
import { IconsModule } from '../shared/icons/icons.module';

@NgModule({
  declarations: [
    AdmissaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  exports: [

  ]
})
export class CoreModule { }
