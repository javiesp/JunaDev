import { Component, OnInit } from '@angular/core';
import {FireserviceService} from 'src/app/fireservice.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public username:any;
  public password:any;
  public apellido:any;
  public email:any;

  constructor(
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  signup(){
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if (res.user.uid){
        let data={
          
          username:this.username,
          password:this.password,
          apellido:this.apellido,
          email:this.email
        }
        this.fireService.saveDetails(data).then(res=>{
          alert('account create ');
        },err=>{
          console.log (err);
        }
        )

      }
    },err=>{
      alert(err.message);
      console.log (err);
    }
    )
  }

}


