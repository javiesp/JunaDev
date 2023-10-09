import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPrincipalPage } from './vistas/menu-principal/menu-principal.page';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login', // Cambiado de 'home' a 'login'
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./vistas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./vistas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./vistas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./vistas/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'scan-qr-pago',
    loadChildren: () => import('./vistas/scan-qr-pago/scan-qr-pago.module').then( m => m.ScanQrPagoPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./vistas/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./vistas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'carrito-compras',
    loadChildren: () => import('./vistas/carrito-compras/carrito-compras.module').then( m => m.CarritoComprasPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./vistas/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./vistas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
