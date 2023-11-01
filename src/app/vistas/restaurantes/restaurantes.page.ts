import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid'; // Importa uuidv4
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  restaurantes: any[];
  menuRestaurante: any[];
  restauranteSeleccionado: any;
  isModalOpen: boolean;
  uid: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private loadingController: LoadingController) {

  }

  //Función para generar un nuevo pedidoID
  generarPedidoID(): string {
    return uuidv4();
  }

  //agrega el pedido al carrito junto con sus id
  agregarAlCarrito(usuarioID: string, menu: any, restaurante: string) {
    const pedidoID = this.generarPedidoID(); // Genera un nuevo pedidoID usando la función
    const carritoItemRef = this.db.object(`CarritoPedidos/${usuarioID}/${pedidoID}`);
    carritoItemRef.update({ Menu: menu, Restaurante: restaurante });
  }



  //obtiene el menu del restaurante seleccionado
  getMenuRestaurante(restauranteId: number) {
    const restaurante = this.restaurantes.find(rest => rest.id === restauranteId);
    
    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
      this.isModalOpen = true; // Asegúrate de establecer el modal como abierto
    }
  }
  

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando restaurantes...', // Mensaje que se mostrará
      duration: 1000 // Duración en milisegundos (ajusta según tus necesidades)
    });
    
    await loading.present();
    
    //Carga los elementos a listar
    this.db.list('restaurantes').valueChanges().subscribe((data: any[]) => { //Busca la data y las guarda en this.restaurantes
      this.restaurantes = data;
    });

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        console.log('uid usuario:', this.uid);
      }
    });
  }

  ngOnInit() {}
}



































    /*this.db.list('restaurantes').valueChanges().subscribe((data: any[]) => {
      this.restaurantes = data;
    });

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        console.log('uid usuario:', this.uid);
      }
    });*/