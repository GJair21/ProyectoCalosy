import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

interface ResData {
  Idarete: number;
  Nombre: string;
  Color: string;
  Raza: string;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage {
  resList = [];
  resData: ResData;
  constructor(private router: Router, public authSvc:AuthService, private firebaseService: FirebaseService) { this.resData = {} as ResData; }

  VerMapa(){
    this.router.navigate(['/admin']);
  }
  back(){
    this.router.navigate(['/login']);
    this.authSvc.afAuth.signOut();
  }
  register(){
    this.router.navigate(['/registroganado']);
  }

  ngOnInit() {
    this.firebaseService.leer_res().subscribe(data => {
      
      this.resList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Idarete: e.payload.doc.data()['Idarete'],
          Nombre: e.payload.doc.data()['Nombre'],
          Color: e.payload.doc.data()['Color'],
          Raza: e.payload.doc.data()['Raza']
        };
      })
      console.log(this.resList);

    }); 
  }
  RemoveRecord(rowID) {
    this.firebaseService.eliminar_res(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditIdarete = record.Idarete;
    record.EditNombre = record.Nombre;
    record.EditColor = record.Color;
    record.EditRaza = record.Raza;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Idarete'] = recordRow.EditIdarete;
    record['Nombre'] = recordRow.EditNombre;
    record['Color'] = recordRow.EditColor;
    record['Raza'] = recordRow.EditRaza;
    this.firebaseService.actualizar_res(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
