import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage {
  public user$:Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private route:Router) { }

  async onSendEmail():Promise<void>{
    try{
      this.authSvc.sendVerificationEmail();
    }catch(error){console.log("error", error)}
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }

  accept(){
    this.route.navigate(['/login']);
  }
}
