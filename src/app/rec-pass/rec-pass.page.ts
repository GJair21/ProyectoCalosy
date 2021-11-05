import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-rec-pass',
  templateUrl: './rec-pass.page.html',
  styleUrls: ['./rec-pass.page.scss'],
})
export class RecPassPage {

  constructor(private authSvc: AuthService, private router: Router) { }

  async onResetPassword(email){
    try{
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login'])
    }catch(error){console.log("error", error)}
  }
}
