import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  miModelo: any;
  constructor(private authSvc: AuthService, private route:Router ) {
    this.miModelo = {};
   }
   passwordTypeInput  =  'password';

  ngOnInit() {
  }


  async onRegister(email, password){
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    }catch(error){
      console.log("error", error);
    }
  }

  private redirectUser(isVerified:boolean): void{
    if(isVerified){
      this.route.navigate(['admin']);
    }else{
      this.route.navigate(['verify-email']);
    }
  }

  public togglePasswordMode(){
    var x = document.getElementById('password');
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
   }
}
