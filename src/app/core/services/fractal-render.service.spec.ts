import { TestBed } from '@angular/core/testing';

import { FractalRenderService } from '../services/fractal-render.service';

describe('FractalRenderService', () => {
  let service: FractalRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FractalRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
