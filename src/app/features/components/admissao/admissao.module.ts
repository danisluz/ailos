import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AdmissaoComponent } from './admissao.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [
    AdmissaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask()
  ]
})
export class AdmissaoModule { }
