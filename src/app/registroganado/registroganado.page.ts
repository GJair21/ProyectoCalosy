import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

interface ResData {
  Idarete: number;
  Nombre: string;
  Color: string;
  Raza: string;
}

@Component({
  selector: 'app-registroganado',
  templateUrl: './registroganado.page.html',
  styleUrls: ['./registroganado.page.scss'],
})
export class RegistroganadoPage {

  resList = [];
  resData: ResData;
  resForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder,
    private router: Router
  ) { this.resData = {} as ResData; }

  ngOnInit() {

    this.resForm = this.fb.group({
      Idarete: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Color: ['', [Validators.required]],
      Raza: ['', [Validators.required]]
    })

  }
  CreateRecord() {
    console.log(this.resForm.value);
    this.firebaseService.crear_res(this.resForm.value).then(resp => {
      this.resForm.reset();
      this.router.navigate(['/prueba']);
    })
      .catch(error => {
        console.log(error);
      });
  }
}

