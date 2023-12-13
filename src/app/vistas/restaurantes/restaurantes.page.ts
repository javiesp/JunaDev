import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid'; // Importa uuidv4
import { LoadingController } from '@ionic/angular';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  restaurantes: any[];
  menuRestaurante: any[];
  restaurantesFiltrados: any[] = [];
  restauranteSeleccionado: any;
  precioMenu: any;
  isModalOpen: boolean;
  uid: string;
  pedidos: any[] = [];

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private loadingController: LoadingController) {

  }

  //Función para generar un nuevo pedidoID
  generarPedidoID(): string {
    return uuidv4();
  }

  agregarAlCarrito(usuarioID: string, plato: any, restaurante: string) {
    // Verificar si el plato ya está en el carrito
    const pedidoExistente = this.pedidos.find((pedido: any) => pedido.platoID === plato.id);
  
    if (pedidoExistente) {
      // Si el plato ya está en el carrito, actualiza la cantidad y el precio total
      pedidoExistente.cantidad += 1; // Suponiendo que hay una propiedad "cantidad" en el pedido
      pedidoExistente.precioTotal += plato.precio; // Suponiendo que hay una propiedad "precioTotal" en el pedido
      this.actualizarPedidoEnCarrito(usuarioID, pedidoExistente); // Función para actualizar el pedido en el carrito
    } else {
      // Si el plato no está en el carrito, crea un nuevo pedido
      const pedidoID = this.generarPedidoID();
      const nuevoPedido = {
        platoID: plato.id,
        nombre: plato.nombre,
        imagen: plato.img,
        precio: plato.precio,
        restaurante: restaurante,
        cantidad: 1, // Nueva propiedad para mantener la cantidad
        precioTotal: plato.precio // Nueva propiedad para mantener el precio total
      };
  
      this.guardarNuevoPedidoEnCarrito(usuarioID, pedidoID, nuevoPedido); // Función para guardar un nuevo pedido en el carrito
    }
  
    Notiflix.Notify.success('Agregado al carrito');
  }

  
  



  //obtiene el menu del restaurante seleccionado
  async getMenuRestaurante(restauranteId: number) {
    const restaurante = await this.restaurantes.find(rest => rest.id === restauranteId);
    
    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
      this.precioMenu = restaurante.precio;
      this.isModalOpen = true; 
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

  getItems(event: any) {
    const terminoBusqueda = event.target.value.toLowerCase(); // Convertir a minúsculas directamente aquí
  
    if (terminoBusqueda && terminoBusqueda.trim() !== '') {
      this.restaurantesFiltrados = this.restaurantes.filter(restaurante =>
        restaurante.nombre && restaurante.nombre.toLowerCase().includes(terminoBusqueda)
      );
    } else {
      this.restaurantesFiltrados = [...this.restaurantes];
    }
  }
  
  
  ngOnInit() {}


  guardarNuevoPedidoEnCarrito(usuarioID: string, pedidoID: string, nuevoPedido: any) {
    const carritoItemRef = this.db.object(`CarritoPedidos/${usuarioID}/${pedidoID}`);
    carritoItemRef.set({ Pedido: nuevoPedido }); // Set the new order
    this.pedidos.push(nuevoPedido); // Add the new order to the local array
  }
  
  actualizarPedidoEnCarrito(usuarioID: string, pedidoActualizado: any) {
    const pedidoIndex = this.pedidos.findIndex((pedido: any) => pedido.platoID === pedidoActualizado.platoID);
    if (pedidoIndex !== -1) {
      this.pedidos[pedidoIndex] = pedidoActualizado; // Update the local array
      const carritoItemRef = this.db.object(`CarritoPedidos/${usuarioID}/${pedidoActualizado.platoID}`);
      carritoItemRef.update({ Pedido: pedidoActualizado });
    }
  }
}