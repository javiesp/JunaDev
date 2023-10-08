import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {


  constructor(public fireservice:FireserviceService,private router: Router,
    ) { }

  ngOnInit() {
  }
  async logout() {
    try {
      await this.fireservice.signOut();
      this.router.navigate(['/login']); // Redirige al login después de cerrar sesión.
    } catch (err) {
      console.error(err);
      // Manejar cualquier error que ocurra al cerrar sesión.
    }
  }
  
}
