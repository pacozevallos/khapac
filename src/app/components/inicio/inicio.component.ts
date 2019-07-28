import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  slides: any;
  proyectos: any;

  constructor( private fs: FirebaseService, public ps: ProyectosService  ) { }

  ngOnInit() {
    this.slides = [
      {
        categoria: 'Branding',
        titulo: 'Construye, identifica y gestiona tu marca',
        imagen: 'assets/images/carousel/01.jpg',
        button: 'ver portafolio',
        toLink: '/portafolio'
      },
      {
        categoria: 'Servicios',
        titulo: 'Soluciones puntuales bajo un servicio integral',
        imagen: 'assets/images/carousel/02.jpg',
        button: 'ver servicios',
        toLink: '/servicios'
      },
      {
        categoria: 'Enfoque',
        titulo: 'Bases firmes para construir grandes proyectos',
        imagen: 'assets/images/carousel/03.jpg',
        button: 'ver enfoque',
        toLink: '/enfoque'
      }
    ];

    this.proyectos = this.fs.getProyectosAll();
  }

}
