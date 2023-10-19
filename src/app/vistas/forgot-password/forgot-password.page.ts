import { Component, OnInit } from '@angular/core';
import { FireserviceService } from 'src/app/fireservice.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  providers:[FireserviceService],
})
export class ForgotPasswordPage implements OnInit {
  userEmail = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  onReset(){
    console.log('SentEmail');
  }


}
