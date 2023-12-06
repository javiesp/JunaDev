import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FireserviceService } from 'src/app/servicios/fireservice.service';
import { DataService } from 'src/app/servicios/data.service';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public email:any;
  public password: any;


  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    public fireservice:FireserviceService,
    private alertController:AlertController,
    private dataService: DataService,
    private cdRef: ChangeDetectorRef,  // Agrega ChangeDetectorRef aquí
    
  ) {}
  
  ngOnInit() {
    // Verificar si hay un usuario en el almacenamiento local al cargar la página
    this.verificarUsuarioAlCargarPagina();
  }

  // Esta función se ejecuta cuando se presiona el botón de inicio de sesión.
  async login() {
    if (!this.email || !this.password) {
      await this.presentAlert('Por favor, ingresa un correo electrónico y una contraseña.');
      return;
    }
    this.showLoading();
    try {
      const res = await this.fireservice.loginWithEmail({ email: this.email, password: this.password });
      console.log(res);
      if (res.user.uid) {
        this.fireservice.getDetails({ uid: res.user.uid }).subscribe(
          async (userData) => {
            console.log(userData);
            await this.dataService.guardarUsuario(userData); // Guardar información del usuario en el almacenamiento local
            this.loadingCtrl.dismiss();
            this.router.navigate(['/menu-principal']);
          },
          (err) => {
            console.log(err);
            this.loadingCtrl.dismiss();
          }
        );
      }
    } catch (err) {
      console.log(err);
      // Verifica el tipo de error para mostrar el mensaje adecuado
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        await this.presentAlert('Usuario o contraseña incorrectos');
      } else {
        await this.presentAlert('Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
      }
      this.loadingCtrl.dismiss();
    }
  }
  

  // Verificar si hay un usuario en el almacenamiento local al cargar la página
  async verificarUsuarioAlCargarPagina() {
    const usuarioGuardado = await this.dataService.obtenerUsuario();
    if (usuarioGuardado) {
      // Si hay un usuario almacenado, navegar directamente al menú principal
      this.router.navigate(['/menu-principal']);
    }
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

  // Función para mostrar el indicador de carga
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 5000,
    });
    await loading.present();
  }



    // Esta función se ejecuta cuando se presiona el botón de registro.
  // Redirige al usuario a la página de registro.
  signup() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }



}
