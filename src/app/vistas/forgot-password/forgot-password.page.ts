import { Component, OnInit } from '@angular/core';
import { FireserviceService } from 'src/app/servicios/fireservice.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  providers:[FireserviceService],
})
export class ForgotPasswordPage implements OnInit {
  userEmail = new FormControl('');
  constructor(private authSvc:FireserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  
  onReset(){
    try{
      const email = this.userEmail.value;
    this.authSvc.resetPassword(email);
    window.alert('Email enviado');
    this.router.navigate(['/login']);

    }
    catch(error){console.log(error);}
    
  }


}
