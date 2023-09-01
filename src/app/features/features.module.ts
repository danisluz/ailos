import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmissaoModule } from './components/admissao/admissao.module';

@NgModule({
  imports: [CommonModule, RouterModule, AdmissaoModule],
})
export class FeaturesModule {}
