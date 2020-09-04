import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfoque',
  templateUrl: './enfoque.component.html',
  styleUrls: ['./enfoque.component.sass']
})
export class EnfoqueComponent implements OnInit {

  enfoques = [
    {
      titulo: 'Concepto de marca',
      subTitulo: 'Bases firmes para construir grandes proyectos',
      descripcion: 'Investigamos, analizamos, definimos el concepto de marca y la estrategia que nos permita alcanzar los objetivos de cada proyecto. Determinamos el target, su entorno y sus objetivos presentes y futuros.',
      image: 'assets/images/imgConceptoMarca.jpg'
    },
    {
      titulo: 'Desarrollo de marca',
      subTitulo: 'Una idea clara y un propósito concreto',
      descripcion: 'Desarrollamos el sistema de marca, definimos una voz única para un mensaje identitario, memorable y claro. Creamos los elementos necesarios para comunicar con claridad, personalidad y diferencia.',
      image: 'assets/images/imgDesarrolloMarca.jpg'
    },
    {
      titulo: 'Gestión de marca',
      subTitulo: 'Conectar con tus audiencias',
      descripcion: 'Gestionamos la experiencia de marca, creando contenido estratégico y coherente para las audiencias. Diseñamos experiencias de marca proyectando el valor dentro de soluciones enfocadas en los usuarios y el entorno.',
      image: 'assets/images/imgGestionMarca.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
