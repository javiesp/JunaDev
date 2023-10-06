import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FireserviceService} from 'src/app/fireservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public email:any;
  public password: any;

  constructor(
    private router: Router,

    public fireservice:FireserviceService
  ) {}
  
  ngOnInit() {
  }


  login() {
    // Verificar las credenciales con la lista de usuarios del servicio
    this.fireservice.loginWithEmail({ email: this.email, password: this.password }).then(res => {
      console.log(res);
      if (res.user.uid) {
        this.fireservice.getDetails({ uid:res.user.uid}).subscribe(res => {
          console.log(res);
          this.router.navigate(['/menu-principal']); 
        },err=>{
          console.log(err);
        }
        );
      }
    }, err => {
      alert(err.message);
      console.log(err);
    });
  }

  signup() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }
  
}


