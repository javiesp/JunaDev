import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  userEmail: string;
  userName: string;
  creationTime: string; // Agrega una propiedad para la fecha de creación

  constructor(
    public fireservice: FireserviceService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  // Esta función se ejecuta cuando el usuario desea cerrar sesión.
  // Muestra un cuadro de diálogo de confirmación para asegurarse de que el usuario desea cerrar sesión.
  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Está seguro de que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Cancelar la acción
          }
        },
        {
          text: 'Cerrar Sesión',
          handler: async () => {
            try {
              await this.fireservice.signOut();
              this.router.navigate(['/login']);
              this.userEmail = '';
              this.creationTime = '';
            } catch (err) {
              console.error(err);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
