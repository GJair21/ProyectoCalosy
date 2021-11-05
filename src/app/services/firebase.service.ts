// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Reses';

  constructor(
    private firestore: AngularFirestore
  ) { }

  crear_res(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  leer_res() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  actualizar_res(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  eliminar_res(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}