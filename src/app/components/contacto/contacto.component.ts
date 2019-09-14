import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RequerimientoComponent } from '../requerimiento/requerimiento.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
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
