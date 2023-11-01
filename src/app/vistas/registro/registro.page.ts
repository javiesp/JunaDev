import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public fireService:FireserviceService,public router:Router
  ) { }

  ngOnInit() {
  }

  // Esta función se encarga del proceso de registro de un nuevo usuario en la aplicación.
  signup(){
    // Llama al servicio de Firebase para registrarse con el correo electrónico y la contraseña proporcionados.
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if (res.user.uid){
        // Cuando el registro es exitoso, crea un objeto de datos del usuario.
        let data={
          
          username:this.username,
          password:this.password,
          apellido:this.apellido,
          email:this.email
        }
         // Llama al servicio de Firebase para guardar los detalles del usuario en la base de datos.
        this.fireService.saveDetails(data).then(res=>{
          alert('account create ');
          this.router.navigate(['/login']);
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


