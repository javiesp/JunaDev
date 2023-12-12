import { Component, OnInit } from '@angular/core';
import { FireserviceService } from 'src/app/servicios/fireservice.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  providers:[FireserviceService],
})
export class ForgotPasswordPage implements OnInit {
  userEmail = new FormControl('');
  email: any;
  constructor(private authSvc:FireserviceService, private router:Router,private alertController:AlertController,) { }

  ngOnInit(): void {
  }

  
  onReset() {
    try {
      // Obtén el valor del campo de correo electrónico
      const email = this.email;
  
      // Verifica si el campo de correo electrónico está vacío
      if (!email || email.trim() === '') {
        // Muestra una alerta si el campo de correo electrónico está vacío
        this.presentAlert('Por favor, ingresa tu dirección de correo electrónico.');
        return; // Detén la ejecución de la función
      }
  
      // Continúa con la lógica si el campo de correo electrónico no está vacío
      this.authSvc.resetPassword(email);
      this.presentAlert('Enviado Con Éxito');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
  


  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
