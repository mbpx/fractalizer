import { Injectable } from '@angular/core';
import { Fractal } from '../logic/fractals/fractal.model';
import { MandelbrotFractals } from '../logic/fractals/mandelbrot-fractals';
import { ColorPalettes } from '../logic/palletes/color-palletes';
import { Palette } from '../logic/palletes/pallete.model';

@Injectable({
  providedIn: 'root'
})
export class FractalRenderService {

  fractal: Fractal = MandelbrotFractals.mandelbrot;
  palette: Palette = ColorPalettes.redPalette;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  sqmax: number;
  offset: number;

  zoom: number = 0.9;
  movx: number = -0.4;
  movy: number = 1;

  constructor() { }

  setCanvas(canvas: HTMLCanvasElement, width: number, height: number): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = width;
    this.height = width;
    this.sqmax = Math.max(this.width, this.height);
    this.offset = this.sqmax - Math.min(this.width, this.height);
    this.canvas.width = this.width;
    this.canvas.height = this.height - 80;
    this.ctx.fillStyle = "#000000";

    this.draw(this.movx, this.movy, this.zoom);
    window.addEventListener('keydown', (event) => { this.onKeyPress(event) }, true);
  }

  setFractal(fractal: Fractal): void {
    this.fractal = fractal;
    this.movx = fractal.x;
    this.movy = fractal.y;
    this.zoom = fractal.zoom;
    this.draw(this.movx, this.movy, this.zoom);
  }

  setPalette(palette: Palette) {
    this.palette = palette;
    this.draw(this.movx, this.movy, this.zoom);
  }

  mapPosition(num: number, inmin: number, inmax: number, outmin: number, outmax: number): number {
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
  }

  zoomIn(x: number, y: number) {
    const zoomInRatio: number = 1.5;
    this.zoom = this.zoom * zoomInRatio;
    this.movx += this.mapPosition(x, 0, this.width, -2, 2) / this.zoom;
    this.movy += this.mapPosition(y, 0, this.height, -2, 2) / this.zoom;
    this.draw(this.movx, this.movy, this.zoom);
  }

  onKeyPress(event: any) {
    const zoomOutRatio: number = 1.25;
    let moveRatio: number = 0.5;
    const zoomOutKey: number = 32;
    const zoomInKey: number = 13;

    if (this.zoom > 3) {
      moveRatio *= 2;
    }

    if (event.which == zoomInKey) {
      this.zoomIn(this.width / 2, this.height / 3);
    } else {
      if (event.which == zoomOutKey) {
        this.zoom = this.zoom / zoomOutRatio;
      }
      if (event.which == 37) {
        this.movx -= moveRatio / this.zoom;
      }
      if (event.which == 38) {
        this.movy -= moveRatio / this.zoom;
      }
      if (event.which == 39) {
        this.movx += moveRatio / this.zoom;
      }
      if (event.which == 40) {
        this.movy += moveRatio / this.zoom;
      }
      this.draw(this.movx, this.movy, this.zoom);
    }
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.sqmax = Math.max(this.width, this.height);
    this.offset = this.sqmax - Math.min(this.width, this.height);
    this.canvas.width = this.width;
    this.canvas.height = this.height - 80;
    this.draw(this.movx, this.movy, this.zoom);
  }

  draw(xmov: number, ymov: number, zoom: number) {
    var max_iterations = 100;
    var iterator = 0.3;

    var palette = this.palette.values;

    var imagedata = this.ctx.createImageData(this.width, this.height);
    var pixels = imagedata.data;

    for (var x = 0; x < this.width; x++) {
      for (var y = 0; y < this.height; y++) {

        var a = this.mapPosition(x, 0, this.sqmax, -2, 2) / zoom + xmov; //+ 0.2;
        var b = this.mapPosition(y, 0, this.sqmax, -2, 2) / zoom + ymov;

        var n = 0;
        var ca = a, cb = b;

        while (n < max_iterations) {
          var aa = this.fractal.zreal(a, b);
          var bb = this.fractal.zimag(a, b);
          a = aa + ca;
          b = bb + cb;
          if (a * a + b * b > 16) {
            break;
          }
          n += iterator;
        }

        var bright = this.mapPosition(n, 0, max_iterations, 0, 1); // 255
        bright = this.mapPosition(Math.pow(bright, 1 / 1.3), 0, 1, 0, 255);

        var color;
        if (n >= 100) {
          color = palette[255];
        } else {
          let index = Math.floor(bright);
          color = palette[index];
        }

        var pix = (y * this.width + x) * 4;
        pixels[pix + 0] = color.r;
        pixels[pix + 1] = color.g;
        pixels[pix + 2] = color.b;
        pixels[pix + 3] = 255;
      }
    }
    this.ctx.putImageData(imagedata, 0, 0);
  }
}
