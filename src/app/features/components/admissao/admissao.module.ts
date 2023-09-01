import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AdmissaoComponent } from './admissao.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdmissaoComponent,
  },
];

@NgModule({
  declarations: [AdmissaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SharedModule
  ],
  providers: [provideNgxMask()],
})
export class AdmissaoModule {}
