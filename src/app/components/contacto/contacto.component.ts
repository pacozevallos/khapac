import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RequerimientoComponent } from '../requerimiento/requerimiento.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  @ViewChild('f') form;

  constructor(
    // public dialogRef: MatDialogRef<RequerimientoComponent>,
    private fb: FormBuilder,
    private fs: FirebaseService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
    ) {
    this.forma = this.fb.group({
      descripcion: [ '', [Validators.required, Validators.maxLength(1200)] ],
      // area: ['', Validators.required],
      nombre: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(9)] ],
      email: [ '', [Validators.required, Validators.email]],
      fechaCreacion: [ firebase.firestore.FieldValue.serverTimestamp() ],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.forma.valid) {
      this.guardarMensaje();
    } else {
      this.validateAllFormFields(this.forma);
    }
  }

  guardarMensaje() {
    // this.fs.saveMensaje(this.forma.value);
    // // this.dialogRef.close();
    // this.snackBar.open('Tu mensaje ha sido enviado', 'CERRAR', {
    //   duration: 3000,
    // });


    this.fs.saveMensaje(this.forma.value)
    .then(() => {
      console.log(this.forma.value);
      this.form.resetForm({
        fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.snackBar.open('Tu mensaje ha sido enviado', 'CERRAR', {
        duration: 8000,
      });
    }, error => console.error('error al enviar el formulario:', error));
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

  openRequerimientoModal() {
    const dialogRef = this.dialog.open(RequerimientoComponent, {
      width: '520px',
      // data: { nombre: key }
    });

    dialogRef.afterClosed().subscribe(result => {
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
