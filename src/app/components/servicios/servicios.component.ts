import { Component, OnInit } from '@angular/core';
import { RequerimientoComponent } from '../requerimiento/requerimiento.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {

  servicios;
  serviciosAdicionales;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.servicios = [
      {
        titulo: 'Branding',
        subTitulo: 'Construcción de marca',
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imageServicio.jpg'
      },
      {
        titulo: 'Web',
        subTitulo: 'Diseño, desarrollo e implementación',
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imgWeb.jpg'
      },
      {
        titulo: 'Marketing Digital',
        subTitulo: 'Campañas estratégicas',
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        elementos: [ 'Análisis de competencias', 'Estrategia de marca', 'Estrategia de comunicación', 'Investigación', 'Auditoria de marca', 'Arquitectura de marca', 'Lenguaje de marca', 'Personalidad y comportamiento'
        ],
        image: 'assets/images/imgMarketingDigital.jpg'
      },
    ];


    this.serviciosAdicionales = [
      {
        titulo: 'Branding',
        subTitulo: 'Construcción de marca',
        descripcion: 'Consultoría y desarrollo de marca, manual de identidad, aplicaciones gráficas en papelería, personalidad y atributos que componen la imagen de tu marca.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/servicios%2FimgBranding.jpg?alt=media&token=5b3644d6-1fa1-47ca-8da2-000cbe7a9648'
      },
      {
        titulo: 'Web',
        subTitulo: 'Diseño, desarrollo e implementación',
        descripcion: 'Diseño UI & mobile, programación Front-End y Backend, Desarrollo de administrador de contenidos y Landing Page.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/servicios%2FimgWeb.jpg?alt=media&token=1e29a4e7-c953-4921-9092-952ee7550f5a'
      },
      {
        titulo: 'Marketing Digital',
        subTitulo: 'Campañas estratégicas',
        descripcion: 'Estrategias de marketing de contenidos, campañas digitales, Email marketing, implementación y administración de pautas digitales y redes sociales.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgMarketingDigital.jpg?alt=media&token=182830b7-2159-4a21-bfef-5658aec3e36c'
      },
      {
        titulo: 'Editorial',
        subTitulo: 'Medios impresos',
        descripcion: 'Producción y desarrollo de revistas, boletines, libros y diferentes piezas gráficas para medios impresos..',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgEditorial.jpg?alt=media&token=ae7224dc-0c6f-46a9-8e94-4b75f4b58a9e'
      },
      {
        titulo: 'Señalética',
        subTitulo: 'Comunicación Visual',
        descripcion: 'Análisis y desarrollo de piezas gráficas corporativas y señaléticas',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgSenaletica.jpg?alt=media&token=4f93dd2f-fbca-42b3-a674-688213f8dbc2'
      },
      {
        titulo: 'Multimedia y 3D',
        subTitulo: 'Modelado y Animación',
        descripcion: 'Desarrollo de proyectos de modelado 3D de alta calidad y detalle.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgMultimedia3d.jpg?alt=media&token=448a3e95-731e-4d70-bb54-f5c2df857379'
      },
      {
        titulo: 'Comunicación Interna',
        subTitulo: 'Un equipo comprometido ',
        descripcion: 'Comunicación dirigida al cliente interno, comprometiendo e identificando a su equipo humano con los objetivos de la empresa.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgComunicacionInterna.jpg?alt=media&token=3e80b515-0cf4-4747-8f3c-2e76e4b34ed9'
      },
      {
        titulo: 'Diseño de empaque',
        subTitulo: 'La importancia del envase',
        descripcion: 'Diseño de empaques para conectar con sus clientes desde la primera vista.',
        image: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/serviciosAdicionales%2FimgDisenoEmpaque.jpg?alt=media&token=bda47cc4-95f6-4539-997a-f607bd9d4727'
      }

    ];

  }

  openRequerimientoModal() {
    const dialogRef = this.dialog.open(RequerimientoComponent, {
      width: '520px',
      // data: { nombre: key }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
