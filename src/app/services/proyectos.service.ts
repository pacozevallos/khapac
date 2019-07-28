import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

    proyectos = [

      {
        id: 'laPrevisora',
        nombre: 'La Previsora',
        imagen: 'assets/images/destacados/previsora.jpg',
        categorias: [ 'Rediseño de marca', 'Desarrollo Web' ],
      },
      {
        id: 'orbitec',
        nombre: 'Orbitec',
        imagen: 'assets/images/destacados/orbitec.jpg',
        categorias: [ 'Rediseño de marca', 'Desarrollo Web' ],
      },
      {
        id: 'zedina',
        nombre: 'Zedina',
        imagen: 'assets/images/destacados/zedina.jpg',
        categorias: [ 'Editorial', 'Desarrollo Web' ],
      },
      {
        id: 'puragro',
        nombre: 'Puragro',
        imagen: 'assets/images/destacados/puragro.jpg',
        categorias: [ 'Editorial', 'Ilustración' ],
      },
      {
        id: 'yakuTravel',
        nombre: 'Yaku Travel',
        imagen: 'assets/images/destacados/yakuTravel.jpg',
        categorias: [ 'Rediseño de marca', 'MKT Digital' ],
      },
      {
        id: 'sineace',
        nombre: 'Sineace',
        imagen: 'assets/images/destacados/sineace.jpg',
        categorias: [ 'Señalética', 'Desarrollo Web' ],
      },
      {
        id: 'grupoDeGol',
        nombre: 'Grupo De Gol',
        imagen: 'assets/images/destacados/grupoDeGol.jpg',
        categorias: [ 'Multimedia 3D', 'Editorial' ],
      },
      {
        id: 'pecsa',
        nombre: 'Pecsa',
        imagen: 'assets/images/destacados/pecsa.jpg',
        categorias: [ 'Multimedia 3D' ],
      },
      {
        id: 'ebisuRestobar',
        nombre: 'Ebisu Restobar',
        imagen: 'assets/images/destacados/ebisu.jpg',
        categorias: [ 'Rediseño de marca', 'MKT Digital' ],
      },
      {
        id: 'toyotaTsusho',
        nombre: 'Toyota Tsusho',
        imagen: 'assets/images/destacados/toyotaTsusho.jpg',
        categorias: [ 'Desarrollo Web' ],
      }

    ];

   getProyectos() {
    return of(this.proyectos);
  }

  // getProyectosCategoria() {
  //   return of(this.proyectos.categorias);
  // }
}
