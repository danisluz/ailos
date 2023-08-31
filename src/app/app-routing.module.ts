import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoComponent } from './core/admissao/admissao.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
