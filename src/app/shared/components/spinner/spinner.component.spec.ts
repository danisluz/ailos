import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      imports: [
        FontAwesomeModule
      ],
    });

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o ícone do spinner', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const spinnerIcon = compiled.querySelector('.fa-spinner');

    expect(spinnerIcon).toBeTruthy();
  });

  it('deve usar o faSpinner como o ícone FontAwesome', () => {
    expect(component.faSpinner).toEqual(faSpinner);
  });
});