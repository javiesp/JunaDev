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
  creationTime: string; 
  username: string;


  constructor(
    public fireservice: FireserviceService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }


  async loadUserInfo() {
    try {
      const user = await this.getCurrentUser();
      if (user) {
        this.userEmail = user.email;
        this.creationTime = user.metadata.creationTime; // Obtiene la fecha de creación
        this.username = user.displayName;
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
