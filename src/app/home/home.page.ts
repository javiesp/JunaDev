import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {


  qrCodeString = 'Clave dinámica';
  scannedResult: any;
  content_visibility = '';

  constructor(
    private router: Router,
    // private barcodeScanner: BarcodeScanner
    ) {}


 // Esta función verifica si la aplicación tiene permiso para acceder al escáner de códigos de barras.
 // Devuelve `true` si el permiso ha sido otorgado y `false` en caso contrario.
  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }
 // Esta función se ejecuta al presionar el botón para iniciar el escaneo.
 // Verifica el permiso para usar el escáner y, si se otorga, inicia el escaneo.
  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }


  // Esta función se utiliza para detener el escaneo y restaurar la interfaz a su estado normal.
  // Muestra nuevamente el fondo de la aplicación y elimina la clase 'scanner-active' del cuerpo del documento.
  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  // Esta función se ejecuta cuando se destruye la página.
  // Asegura que el escaneo se detenga cuando la página se destruye.
  ngOnDestroy(): void {
      this.stopScan();
  }

  valor() {
    this.router.navigate(['/valor-r']); // Redirige a la página de registro
  }

}