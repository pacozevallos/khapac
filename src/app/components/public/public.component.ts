import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass']
})
export class PublicComponent implements OnInit {

  links: any;

  // Para que el menú routerLink desaparezca cuando se haga click
  @ViewChild('drawer') drawer;
  selected(option: string) {
  this.drawer.toggle();
  }

  constructor( private router: Router) { }

  ngOnInit() {
    this.links = [
      { nombre: 'Inicio', url: '/', option: 'exact: true' },
      { nombre: 'Portafolio', url: '/portafolio' },
      { nombre: 'Enfoque', url: '/enfoque' },
      { nombre: 'Servicios', url: '/servicios' },
      // { nombre: 'lab', url: '/lab' },
      { nombre: 'Conversemos', url: '/conversemos' },
    ];
  }

  getRoute() {
    if (this.router.url === '/') {
     return 'navbarFloat';
    }
  }

  getRouteActive(url) {
    return this.router.url === url;
  }

}
