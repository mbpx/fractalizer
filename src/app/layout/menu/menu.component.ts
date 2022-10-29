import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Fractal } from 'src/app/core/logic/fractals/fractal.model';
import { MandelbrotFractals } from 'src/app/core/logic/fractals/mandelbrot-fractals';
import { ColorPalettes } from 'src/app/core/logic/palletes/color-palletes';
import { Palette } from 'src/app/core/logic/palletes/pallete.model';
import { FractalRenderService } from 'src/app/core/services/fractal-render.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private fractalRenderService: FractalRenderService
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Fractales',
        items: []
      },
      {
        label: 'Color',
        items: []
      },
      {
        label: 'Posición',
        items: [
          {
            label: 'x: ',
            icon: 'pi pi-fw pi-arrow-right',
          },
          {
            label: 'y: ',
            icon: 'pi pi-fw pi-align-up',
          },
          {
            label: 'zoom: ',
            icon: 'pi pi-fw pi-search',
          }
        ]
      }
    ];

    this.loadFractals();
    this.loadPalettes();

    this.fractalRenderService.fractalRedraws.subscribe(() => {
      this.items[3].items[0].label = 'x: ' + this.fractalRenderService.movx
      this.items[3].items[1].label = 'y: ' + this.fractalRenderService.movy;
      this.items[3].items[2].label = 'zoom: ' + this.fractalRenderService.zoom;
      this.items = [...this.items];
    });
  }

  loadFractals() {
    this.items[1].items.push(
      {
        label: 'Mandelbrot',
        expanded: false,
        items: []
      },
      {
        label: 'Burning Ship',
        expanded: false,
        items: []
      },
      {
        label: 'Mandelbar',
        expanded: false,
        items: []
      }
    );

    let fractales: Fractal[] = MandelbrotFractals.fractals;
    for (let fractal of fractales) {
      for (let item of this.items[1].items) {
        if (fractal.name.includes(item.label)) {
          item.items.push({
            label: fractal.name,
            command: (event) => {
              this.fractalRenderService.setFractal(fractal);
            }
          })
        }
      }
    }
  }

  loadPalettes() {
    let palletes: Palette[] = ColorPalettes.palettes;
    for (let palette of palletes) {
      this.items[2].items.push({
        label: palette.name,
        command: (event) => {
          this.fractalRenderService.setPalette(palette);
        }
      });
    }
  }

}
