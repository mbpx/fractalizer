import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalDisplayComponent } from './fractal-display.component';

describe('FractalDisplayComponent', () => {
  let component: FractalDisplayComponent;
  let fixture: ComponentFixture<FractalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractalDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FractalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
