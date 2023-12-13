import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FireserviceService } from 'src/app/servicios/fireservice.service';
import * as Notiflix from 'notiflix';




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
  async signup() {
    if (this.username.length >= 1 && this.password.length >= 8 && this.email.includes('@')) {
      try {
        const res = await this.fireService.signup({ email: this.email, password: this.password });
        if (res.user.uid) {
          const data = {
            username: this.username,
            password: this.password,
            apellido: this.apellido,
            email: this.email
            
          };
          this.router.navigate(['/menu-principal']);
          Notiflix.Notify.success('Usuario registrado, sesión iniciada correctamente');
          try {
            await this.fireService.saveDetails(data);
            this.showSuccessAlert();

          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        this.showErrorAlert('Email existente, por favor inicie sesión o recupere contraseña');
        console.log(err);
      }
    } else {
      await this.presentAlert('No se ha guardado el usuario, vuelva a ingresar los datos');
    }
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

    // Función para mostrar el cuadro de alerta
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

}