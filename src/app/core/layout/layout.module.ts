import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
