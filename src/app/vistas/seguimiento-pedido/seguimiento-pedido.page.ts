import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento-pedido',
  templateUrl: './seguimiento-pedido.page.html',
  styleUrls: ['./seguimiento-pedido.page.scss'],
})
export class SeguimientoPedidoPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  valor() {
    this.router.navigate(['/valor-r']); // Redirige a la página de registro
  }


}
