import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, catchError } from 'rxjs/operators';
import { Proyecto } from '../classes/proyecto';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  proyectos;
  proyectoObject: AngularFirestoreDocument<Proyecto>;

  constructor(private afs: AngularFirestore) { }

  getProyectosAll() {
    this.proyectos = this.afs.collection('proyectos', ref => ref
    // .where('aprobado', '==', true)
    // .where('fechaTermino', '>=', this.today)
    .orderBy('orden', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Proyecto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.proyectos;
  }

  getProyectoObject(id: string) {
    this.proyectoObject = this.afs.doc('proyectos/' + id);
    return this.proyectoObject;
  }

  saveRequerimiento(requerimiento) {
    this.afs.collection('requerimientos').add(requerimiento);
  }



}
