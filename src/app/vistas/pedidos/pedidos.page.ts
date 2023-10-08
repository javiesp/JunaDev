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
  pedidos: any[];

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        console.log('uid usuario:', this.uid);
        // Listar pedidos filtrados por el uid del usuario
        this.db.list('CarritoPedidos/' + this.uid).valueChanges().subscribe((data: any[]) => {
          this.pedidos = data;
        });
      }
    });
  }

  ngOnInit() {
  }
}
