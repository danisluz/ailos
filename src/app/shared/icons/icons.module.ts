import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faBuildingColumns,
  faCheckCircle,
  faCircleExclamation,
  faCommentDots,
  faCreditCard,
  faGear,
  faMagnifyingGlass,
  faSliders,
  faSpinner,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
  imports: [FontAwesomeModule],
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
      faCheckCircle,
      faSpinner,
      faCircleExclamation
    );
  }
}
