import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroganadoPage } from './registroganado.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroganadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroganadoPageRoutingModule {}
