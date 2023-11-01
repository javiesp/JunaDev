import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-scan-qr-pago',
  templateUrl: './scan-qr-pago.page.html',
  styleUrls: ['./scan-qr-pago.page.scss'],
})
export class ScanQrPagoPage implements OnDestroy {
  qrCodeString = 'Clave dinámica';
  scannedResult: any;
  content_visibility = '';

  constructor() { }

// Esta función verifica si la aplicación tiene permiso para usar el escáner de códigos de barras.
  async checkPermission() {
    try {
      // Verifica o solicita permiso para usar el escáner de códigos de barras.
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      // El usuario no ha otorgado permiso.
      return false;
    } catch(e) {
      console.log(e);
    }
  }
// Esta función inicia el escaneo de códigos de barras.
  async startScan() {
    try {
      // Verifica si se tiene permiso para escanear códigos de barras.
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      // Oculta el fondo de la aplicación y ajusta la interfaz para el escaneo.
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';

      // Inicia el escáner de códigos de barras y maneja el resultado.
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

  // Esta función detiene el escaneo de códigos de barras y restaura la interfaz.
  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

// Esta función se ejecuta cuando se destruye el componente y asegura que se detenga el escaneo.
  ngOnDestroy(): void {
    this.stopScan();
}


}
