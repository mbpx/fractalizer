import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fractal } from '../logic/fractals/fractal.model';
import { MandelbrotFractals } from '../logic/fractals/mandelbrot-fractals';
import { FractalRenderService } from './fractal-render.service';

@Component({
  selector: 'app-fractal-visualizer',
  templateUrl: './fractal-visualizer.component.html',
  styleUrls: ['./fractal-visualizer.component.sass']
})
export class FractalVisualizerComponent implements OnInit {

  @ViewChild('display', { static: true }) display: ElementRef;

  canvas: HTMLCanvasElement;

  constructor(
    private fractalRenderService: FractalRenderService
  ) { }

  ngOnInit(): void {
    this.canvas = this.display.nativeElement;
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.fractalRenderService.setCanvas(this.canvas, width, height);
  }

  onClick(event: any) {
    this.fractalRenderService.zoomIn(event.clientX, event.clientY);
  }

  onKeyPress(event: any) {
    this.fractalRenderService.onKeyPress(event);
  }

  onResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.fractalRenderService.resize(width, height);
  }
}
