import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  restaurantes: any[];
  menuRestaurante: any[];
  restauranteSeleccionado: any;

  constructor(private router: Router, private loadingController: LoadingController,private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }



  //Funcion para mostrar los tipos de restarantes
  getMenuRestaurante(restauranteId: string) {
    const restaurante = this.restaurantes.find((rest) => rest.id === restauranteId);
    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
    }
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando, espere un momento...', // Mensaje que se mostrará
      duration: 500 // Duración en milisegundos (ajusta según tus necesidades)
    });
    
    await loading.present();
    
    //Carga los elementos a listar
    this.db.list('restaurantes').valueChanges().subscribe((data: any[]) => { //Busca la data y las guarda en this.restaurantes
      this.restaurantes = data;
    });
  }

  

}
