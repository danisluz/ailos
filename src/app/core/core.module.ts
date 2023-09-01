import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IconsModule } from '../shared/icons/icons.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header',
  },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar',
  },
];

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes), IconsModule, CommonModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class CoreModule {}
