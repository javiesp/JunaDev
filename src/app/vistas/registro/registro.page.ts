import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    public fireService:FireserviceService,public router:Router,private alertController:AlertController 
  ) { }

  ngOnInit() {
  }

  // Esta función se encarga del proceso de registro de un nuevo usuario en la aplicación.
  signup() {
    this.fireService.signup({ email: this.email, password: this.password }).then((res) => {
      if (res.user.uid) {
        let data = {
          username: this.username,
          password: this.password,
          apellido: this.apellido,
          email: this.email
        };
  
        this.fireService.saveDetails(data).then(
          (res) => {
            this.showSuccessAlert();
            this.router.navigate(['/login']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }, (err) => {
      this.showErrorAlert(err.message);
      console.log(err);
    });
  }
  
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Cuenta creada',
      message: 'Tu cuenta ha sido registrada con éxito.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async showErrorAlert(errorMessage) {
    const alert = await this.alertController.create({
      header: 'Error al registrar',
      message: errorMessage,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}