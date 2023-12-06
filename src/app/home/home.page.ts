import { Component, OnDestroy, ViewChild  } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import * as Notiflix from 'notiflix';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  @ViewChild(IonModal) modal: IonModal;

  qrCodeString = '4563';
  scannedResult: any;
  content_visibility = '';
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  nombre: string;

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

  cancel() {
    this.modal.dismiss(null, 'cancel');
    Notiflix.Notify.failure('No se ha modificado el metodo de pago');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    Notiflix.Notify.success('Se ha camiado el metodo de pago');
    this.nombre = this.name
    console.log(this.nombre)
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  } 

  pagarCarrito(){
    Notiflix.Notify.success('Pago realizado');
    this.router.navigate(['/seguimiento-pedido']);
  }

  

}