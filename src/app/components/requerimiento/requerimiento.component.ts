import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.sass']
})
export class RequerimientoComponent implements OnInit {

  forma: FormGroup;
  deshabilitado = false;

  areas = [
    { nombre: 'Creación de marca', descripcion: 'Concepto, estrategia, diseño, manual de marca.' },
    { nombre: 'Desarrollo web', descripcion: 'Diseño, desarrollo e implementación, base de datos.' },
    { nombre: 'MKT Digital', descripcion: 'Campañas, redes sociales, FanPage, etc.' },
    { nombre: 'Diseño Editorial', descripcion: 'Boletines, revistas, Brochure, etc.' },
    { nombre: 'Señalética', descripcion: 'Identificación de áreas, simbología, etc.' },
    { nombre: 'Multimedia y 3D', descripcion: 'Presentaciones multimedia y 3D.' },
    { nombre: 'Comunicación interna', descripcion: 'Estrategias dirigidas al cliente interno.' },
    { nombre: 'Diseño de empaques', descripcion: 'Empaques para tus productos.' }
    // 'Desarrollo web',
    // 'MKT Digital',
    // 'Diseño Editorial',
    // 'Señalética',
    // 'Multimedia y 3D',
    // 'Comunicación interna',
    // 'Diseño de empaques'
  ];

  constructor(
    public dialogRef: MatDialogRef<RequerimientoComponent>,
    private fb: FormBuilder,
    private fs: FirebaseService,
    public snackBar: MatSnackBar,
    ) {

    this.forma = this.fb.group({
      descripcion: [ '', [Validators.required, Validators.maxLength(1200)] ],
      area: ['', Validators.required],
      nombre: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(9)] ],
      email: [ '', [Validators.required, Validators.email]],
      fechaCreacion: [ firebase.firestore.FieldValue.serverTimestamp() ],
    });

  }

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.forma.valid) {
      this.guardarRequerimiento();
      this.deshabilitado = true;
    } else {
      this.deshabilitado = false;
      this.validateAllFormFields(this.forma);
    }
  }

  guardarRequerimiento() {
    this.fs.saveRequerimiento(this.forma.value);
    this.dialogRef.close();
    this.snackBar.open('Tu consulta ha sido enviada', 'CERRAR', {
      duration: 3000,
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  errorDescripcion() {
    return this.forma.controls.descripcion.hasError('required') ? 'La descripcion es necesaria.' : '';
  }
  errorArea() {
    return this.forma.controls.area.hasError('required') ? 'Elige una área relacionada.' : '';
  }
  errorNombre() {
    return this.forma.controls.nombre.hasError('required') ? 'El nombre o razón social es requerido.' : '';
  }
  errorEmail() {
    return this.forma.controls.email.hasError('required') ? 'El email es necesario.' :
    this.forma.controls.email.hasError('email') ? 'No es un email válido.' : '';
  }
  errorCelular() {
    return this.forma.controls.celular.hasError('required') ? 'El número de celular es necesario.' :
    this.forma.controls.celular.hasError('maxlength') ? 'No debe exceder los 9 caracteres.' :
    this.forma.controls.celular.hasError('pattern') ? 'Solo se admiten números.' : '';
  }

}
