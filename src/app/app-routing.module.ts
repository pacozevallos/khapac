import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AdminComponent } from './components/admin/admin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { EnfoqueComponent } from './components/enfoque/enfoque.component';
import { ProyectoDetalleComponent } from './components/proyecto-detalle/proyecto-detalle.component';
import { LabComponent } from './components/lab/lab.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PublicComponent } from './components/public/public.component';
import { ContactoAdminComponent } from './components/contacto-admin/contacto-admin.component';
import { LaPrevisoraComponent } from './components/proyectos/la-previsora/la-previsora.component';
import { OrbitecComponent } from './components/proyectos/orbitec/orbitec.component';
import { ZedinaComponent } from './components/proyectos/zedina/zedina.component';
import { PuragroComponent } from './components/proyectos/puragro/puragro.component';
import { YakuTravelComponent } from './components/proyectos/yaku-travel/yaku-travel.component';
import { SineaceComponent } from './components/proyectos/sineace/sineace.component';
import { GrupoDeGolComponent } from './components/proyectos/grupo-de-gol/grupo-de-gol.component';
import { PecsaComponent } from './components/proyectos/pecsa/pecsa.component';
import { EbisuRestobarComponent } from './components/proyectos/ebisu-restobar/ebisu-restobar.component';
import { ToyotaTsushoComponent } from './components/proyectos/toyota-tsusho/toyota-tsusho.component';

const routes: Routes = [

  {
    path: '', component: PublicComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'portafolio', component: PortafolioComponent},
      { path: 'portafolio/:id', component: ProyectoDetalleComponent},
      // { path: 'portafolio/laPrevisora', component: LaPrevisoraComponent},
      // { path: 'portafolio/orbitec', component: OrbitecComponent},
      // { path: 'portafolio/zedina', component: ZedinaComponent},
      // { path: 'portafolio/puragro', component: PuragroComponent},
      // { path: 'portafolio/yakuTravel', component: YakuTravelComponent},
      // { path: 'portafolio/sineace', component: SineaceComponent},
      // { path: 'portafolio/grupoDeGol', component: GrupoDeGolComponent},
      // { path: 'portafolio/pecsa', component: PecsaComponent},
      // { path: 'portafolio/ebisuRestobar', component: EbisuRestobarComponent},
      // { path: 'portafolio/toyotaTsusho', component: ToyotaTsushoComponent},
      { path: 'enfoque', component: EnfoqueComponent },
      { path: 'servicios', component: ServiciosComponent},
      { path: 'lab', component: LabComponent },
      { path: 'conversemos', component: ContactoComponent }
    ]
  },

  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'mensajes', component: ContactoAdminComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
