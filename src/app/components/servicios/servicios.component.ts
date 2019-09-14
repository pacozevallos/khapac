import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {

  servicios;
  serviciosAdicionales;

  constructor() { }

  ngOnInit() {
    this.servicios = [
      {
        titulo: 'Branding',
        subTitulo: 'Construcción de marca',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        // tslint:disable-next-line:max-line-length
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imageServicio.jpg'
      },
      {
        titulo: 'Web',
        subTitulo: 'Diseño, desarrollo e implementación',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        // tslint:disable-next-line:max-line-length
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imgWeb.jpg'
      },
      {
        titulo: 'Marketing Digital',
        subTitulo: 'Campañas estratégicas',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        // tslint:disable-next-line:max-line-length
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imgMarketingDigital.jpg'
      },
    ];


    this.serviciosAdicionales = [

      {
        titulo: 'Editorial',
        subTitulo: 'Medios impresos',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos.',
        image: 'assets/images/imgServicioAdicional.jpg'
      },
      {
        titulo: 'Señalética',
        subTitulo: 'Comunicación Visual',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos.',
        image: 'assets/images/imgServicioAdicional.jpg'
      },
      {
        titulo: 'Multimedia y 3D',
        subTitulo: 'Medios impresos',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos.',
        image: 'assets/images/imgServicioAdicional.jpg'
      },
      {
        titulo: 'Comunicación Interna',
        subTitulo: 'Medios impresos',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos.',
        image: 'assets/images/imgServicioAdicional.jpg'
      },
      {
        titulo: 'Diseño de empaque',
        subTitulo: 'Medios impresos',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos.',
        image: 'assets/images/imgServicioAdicional.jpg'
      }

    ];

  }

}
