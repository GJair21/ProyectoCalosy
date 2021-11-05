import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroganadoPageRoutingModule } from './registroganado-routing.module';

import { RegistroganadoPage } from './registroganado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroganadoPageRoutingModule
  ],
  declarations: [RegistroganadoPage]
})
export class RegistroganadoPageModule {}
