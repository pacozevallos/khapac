import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { FirebaseService } from 'src/app/services/firebase.service';

export interface Proyecto {
  id?: string;
  imagen?: string;
  imagenTop?: string;
  titulo?: string;
  descripcion?: string;
  recomendaciones?: string[];
  ubicacion?: string;
  categoria?: string;
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass']
})
export class PortafolioComponent implements OnInit {

  proyectos;
  categorias: string[];

  constructor( public ps: ProyectosService, private fs: FirebaseService ) { }

  ngOnInit() {
    // this.proyectos = this.ps.getProyectos();
    this.proyectos = this.fs.getProyectosAll();
  }

}
