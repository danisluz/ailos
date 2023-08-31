import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconsModule } from '../shared/icons/icons.module';
import { AdmissaoComponent } from './components/admissao/admissao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdmissaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
  ]
})
export class FeaturesModule { }
