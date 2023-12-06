import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
    loadChildren: () => import('./vistas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./vistas/usuario/usuario.module').then( m => m.UsuarioPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'scan-qr-pago',
    loadChildren: () => import('./vistas/scan-qr-pago/scan-qr-pago.module').then( m => m.ScanQrPagoPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./vistas/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./vistas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'carrito-compras',
    loadChildren: () => import('./vistas/carrito-compras/carrito-compras.module').then( m => m.CarritoComprasPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./vistas/pedidos/pedidos.module').then( m => m.PedidosPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./vistas/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./vistas/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
   
  },  {
    path: 'seguimiento-pedido',
    loadChildren: () => import('./vistas/seguimiento-pedido/seguimiento-pedido.module').then( m => m.SeguimientoPedidoPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
