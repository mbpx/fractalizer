import { Component } from '@angular/core';
import { FractalRenderService } from './core/services/fractal-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'mandelbrot-angular';
  displaySidebar = false;

  constructor(
    private fractalRenderService: FractalRenderService
  ) {
    fractalRenderService.fractalRedraws.subscribe(() => {
      this.title = fractalRenderService.fractal.name.toUpperCase();
    });
  }

  showSidebar() {
    this.displaySidebar = !this.displaySidebar;
    /*let width = window.innerWidth;
    let height = window.innerHeight;
    if (this.displaySidebar) {
      width -= 300;
    }
    this.fractalRenderService.resize(width, height);*/
  }



}
