import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  miModelo: any;

  constructor( public authSvc:AuthService, private route: Router) {
    this.miModelo = {};
  }
  passwordTypeInput  =  'password';


  
  ngOnInit() {
  }

  async onLogin(correo, password){
    try{
      const user = await this.authSvc.login(correo.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    }catch(error){console.log("error", error)}
  }

  private redirectUser(isVerified:boolean): void{
    if(isVerified){
      this.route.navigate(['prueba']);
    }else{
      this.route.navigate(['verify-email']);
    }
  }

  public togglePasswordMode(){
   var x = document.getElementById('password');
   this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
  }
}
