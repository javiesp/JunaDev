import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as Notiflix from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  uid: string;
  pedidos: any[] = [];
  codigo: string;
  saldoTotalCliente : number = 42000;
  saldoFinal : number = 0;
  compraValida : boolean; 

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router : Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        this.obtenerPedidosUsuario(this.uid);
      }
    });
  }

  ngOnInit() {}

  //Funcion que captura los pedidos del cliente y los lista en el carrito 
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
  
  //Funcion para obtener json con descuentos 
  obtenerCodigoDescuento(codigo: string) {
    this.db.object(`CodigoDescuentos/${codigo}`).valueChanges().subscribe((data: any) => {
      if (data && data.Codigo) {
        this.codigo = data.Codigo; // Asigna el código de descuento a this.codigo
        console.log('Código de descuento:', this.codigo);
      } else {
        console.log('No se recibieron datos o no se encontró el código de descuento.');
      }
    });
  }

  //Elimina pedido de carrito de compra
  eliminarPedidosDelUsuario(usuarioID: string) {
    this.db.object(`CarritoPedidos/${usuarioID}`).remove()
      .then(() => {
        console.log('Pedidos del usuario eliminados exitosamente.');
        Notiflix.Notify.success('Pedidos del usuario eliminados exitosamente.');

        this.pedidos = [];
        this.saldoFinal = 0;
      })
      .catch((error) => {
        console.error('Error al eliminar los pedidos del usuario:', error);
      });
  }



  //Calcula el total de la compra sumando los precios del carrito y valida si no supera el saldo total
  calcularTotal(): number {
    let total = 0;
  
    if (this.pedidos && this.pedidos.length > 0) {
      this.pedidos.forEach((pedido: any) => {
        total += pedido?.Pedido?.precio || 0; 
        if (total >= this.saldoTotalCliente) {
          total = -1;
          if (total = -1) {
            this.saldoFinal = 0;
          }
          this.compraValida = false;
          return total; 
        } else {
          this.saldoFinal = this.saldoTotalCliente - total;
          this.compraValida = true;
          return total
        }
      });
    }
    return total;
  }
  



  continuarCompra(){
    if(this.compraValida = true){
      this.router.navigate(['/home']);
      Notiflix.Notify.success('Continuar con la compra');
    }else{
      Notiflix.Notify.failure('El total de la compra supera el saldo');
    }
  }
  



  
  
}
