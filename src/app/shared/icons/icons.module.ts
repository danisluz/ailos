import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faBuildingColumns,
  faCheckCircle,
  faCommentDots,
  faCreditCard,
  faGear,
  faMagnifyingGlass,
  faSliders,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
  imports: [FontAwesomeModule, BrowserModule]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faBell,
      faUser,
      faGear,
      faMagnifyingGlass,
      faStar,
      faCommentDots,
      faSliders,
      faBuildingColumns,
      faCreditCard,
      faCheckCircle
    );
  }
}
