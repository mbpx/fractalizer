import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalVisualizerComponent } from './fractal-visualizer.component';

describe('FractalVisualizerComponent', () => {
  let component: FractalVisualizerComponent;
  let fixture: ComponentFixture<FractalVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractalVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FractalVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
