import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FractalRenderService } from 'src/app/core/services/fractal-render.service';

@Component({
  selector: 'app-fractal-display',
  templateUrl: './fractal-display.component.html',
  styleUrls: ['./fractal-display.component.sass']
})
export class FractalDisplayComponent implements OnInit {

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
