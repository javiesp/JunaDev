import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  uid: string;
  pedidos: any[] = [];

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        this.obtenerPedidosUsuario(this.uid);
      }
    });
  }

  ngOnInit() {}

  obtenerPedidosUsuario(uid: string) {
    this.db.object(`CarritoPedidos/${uid}`).valueChanges().subscribe((data: any) => {
      if (data) {
        this.pedidos = Object.values(data);
        console.log('Pedidos:', this.pedidos);
      } else {
        console.log('No se recibieron datos.');
      }
    });
  }

  eliminarPedidosDelUsuario(usuarioID: string) {
    this.db.object(`CarritoPedidos/${usuarioID}`).remove()
      .then(() => {
        console.log('Pedidos del usuario eliminados exitosamente.');
        this.pedidos = []; // Limpiar la lista después de eliminar
      })
      .catch((error) => {
        console.error('Error al eliminar los pedidos del usuario:', error);
      });
  }

  calcularTotal(): number {
    let total = 0;
    if (this.pedidos && this.pedidos.length > 0) {
      this.pedidos.forEach((pedido: any) => {
        total += pedido?.Pedido?.precio || 0; // Suma el precio del pedido al total
      });
    }
    return total;
  }
  
}
