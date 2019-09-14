import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angularfire2
import { environment } from '../environments/environment';
// import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatIconModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatCardModule,
  MatTabsModule,
  MatToolbarModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDividerModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RequerimientoComponent } from './components/requerimiento/requerimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PortafolioComponent,
    EnfoqueComponent,
    ProyectoDetalleComponent,
    LabComponent,
    ServiciosComponent,
    PublicComponent,
    ContactoAdminComponent,
    LaPrevisoraComponent,
    OrbitecComponent,
    ZedinaComponent,
    PuragroComponent,
    YakuTravelComponent,
    SineaceComponent,
    GrupoDeGolComponent,
    PecsaComponent,
    EbisuRestobarComponent,
    ToyotaTsushoComponent,
    RequerimientoComponent
  ],
  entryComponents: [
    RequerimientoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatIconModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
