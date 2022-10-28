import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Experiencia',
        icon: 'pi pi-fw pi-briefcase',
        expanded: true,
        items: [
          {
            label: 'ATOS',
            icon: 'pi pi-fw pi-building',
            expanded: true,
            items: [
              {
                label: 'Desarrollador full stack',
                icon: 'pi pi-fw pi-caret-up',
              },
              {
                label: 'Desarrollador front end',
                icon: 'pi pi-fw pi-caret-up',
              },
              {
                label: 'Prácticas',
                icon: 'pi pi-fw pi-verified',
              }
            ]
          },
          
          {
            label: 'Otros sectores',
            items: [
              {
                label: 'ALESKA',
                icon: 'pi pi-fw pi-home',
              },
              {
                label: 'FAMILY SHOPPER',
                icon: 'pi pi-fw pi-pound',
              }
            ]
          }
          

        ]
      },
      { label: 'Educación', icon: 'pi pi-fw pi-book' },
      { label: 'Inglés', icon: 'pi pi-fw pi-language' },
      { label: 'Certificados', icon: 'pi pi-fw pi-id-card' },
      { label: 'Habilidades personales', icon: 'pi pi-fw pi-arrows-alt' },
    ];
  }

}
