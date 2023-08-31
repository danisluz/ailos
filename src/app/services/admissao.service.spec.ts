/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdmissaoService } from './admissao.service';

describe('Service: Admissao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissaoService]
    });
  });

  it('should ...', inject([AdmissaoService], (service: AdmissaoService) => {
    expect(service).toBeTruthy();
  }));
});
