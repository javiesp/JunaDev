import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';

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

  constructor(private db: AngularFireDatabase) { 
    this.db.list('restaurantes').valueChanges().subscribe((data: any[]) => { // lista restaurantes de firebase realdatabase
      this.restaurantes = data;
    });
  }

  getMenuRestaurante(restauranteId: string) {
    const restaurante = this.restaurantes.find(rest => rest.id === restauranteId);
    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  

  ngOnInit() {
  }

}
