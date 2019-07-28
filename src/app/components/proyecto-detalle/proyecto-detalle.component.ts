import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.sass']
})
export class ProyectoDetalleComponent implements OnInit {

  categorias;
  color;
  descripcion;
  images;
  imgMiniatura;
  imgPrincipal;
  nombre;
  subtitulo;
  textoImages;
  boxText;
  boxTextColor;

  constructor(private fs: FirebaseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fs.getProyectoObject(id).valueChanges().subscribe(proyecto => {
      this.categorias = proyecto.categorias;
      this.color = proyecto.color;
      this.descripcion = proyecto.descripcion;
      this.images = proyecto.images;
      // this.boxText = proyecto.boxText;
      this.boxText = proyecto.boxText;
      this.imgMiniatura = proyecto.imgMiniatura;
      this.imgPrincipal = proyecto.imgPrincipal;
      this.textoImages = proyecto.textoImages;
      this.nombre = proyecto.nombre;
      this.subtitulo = proyecto.subtitulo;
    });
  }

}
