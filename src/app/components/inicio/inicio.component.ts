import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { FirebaseService } from '../../services/firebase.service';
import { MatDialog } from '@angular/material';
import { RequerimientoComponent } from '../requerimiento/requerimiento.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  slides: any;
  proyectos: any;

  constructor(
    private fs: FirebaseService,
    public ps: ProyectosService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.slides = [
      {
        categoria: 'Branding',
        titulo: 'Branding, manual de marca y diseño web',
        subtitulo: 'Rediseño de marca para La Previsora, corredora de seguros con más de 20 años en el negocio.',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/carousel%2FlaPrevisoraDesktop.jpg?alt=media&token=d5ca0eb4-6043-4798-82b9-25dec463a480',
        button: 'Conoce más',
        toLink: '/portafolio/laPrevisora'
      },
      {
        categoria: 'Servicios',
        titulo: 'Ilustraciones y diseño editorial',
        subtitulo: 'Puragro, empresa peruana que integra a los pequeños agricultores y ganadores en la cadena de valor.',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/carousel%2FpuragroDesktop.jpg?alt=media&token=64604a74-dd68-4bfe-ba2e-72082f0722f3',
        button: 'Conoce más',
        toLink: '/portafolio/puragro'
      },
      {
        categoria: 'Enfoque',
        titulo: 'Diseño y modelado 3D',
        subtitulo: 'Grupo de Gol, empresa constructora con más de 11 años desarrollando proyectos inmobiliarios.',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/datakhapac.appspot.com/o/carousel%2FdeGolDesktop.jpg?alt=media&token=850f1502-eb74-4126-ae4c-9bd43c660c28',
        button: 'Conoce más',
        toLink: '/portafolio/grupoDeGol'
      }
    ];

    this.proyectos = this.fs.getProyectosAll();
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
