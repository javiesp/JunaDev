import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  userEmail: string;
  userName: string;
  creationTime: string; // Agrega una propiedad para la fecha de creación

  constructor(
    public fireservice: FireserviceService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }

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
  

  async loadUserInfo() {
    try {
      const user = await this.getCurrentUser();
      if (user) {
        this.userEmail = user.email;
        this.creationTime = user.metadata.creationTime; // Obtiene la fecha de creación
        console.log(this.userEmail, this.creationTime)
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getCurrentUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject('No hay usuario autenticado');
        }
      });
    });
  }
}
