import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando elementos...', // Mensaje que se mostrará
      duration: 2000 // Duración en milisegundos (ajusta según tus necesidades)
    });
    
    await loading.present();
    
    // Simula una carga ficticia (reemplaza esto con tu lógica de carga real)
    setTimeout(() => {
      loading.dismiss();
    }, 1000); // Ajusta el tiempo según tus necesidades
  }
  

}
