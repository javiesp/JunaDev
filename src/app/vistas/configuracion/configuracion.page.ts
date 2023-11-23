import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/servicios/fireservice.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { GmapsService } from 'src/app/servicios/gmaps.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit, OnDestroy {
  userEmail: string;
  userName: string;
  creationTime: string; // Agrega una propiedad para la fecha de creación
  //gmaps: GmapsService;

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  center = { lat: -33.59792458336969, lng: -70.70543417692222 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];


  constructor(
    public fireservice: FireserviceService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private gmaps: GmapsService,
    private renderer: Renderer2,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cargarGMap();
  }

  // Esta función se ejecuta cuando el usuario desea cerrar sesión.
  // Muestra un cuadro de diálogo de confirmación para asegurarse de que el usuario desea cerrar sesión.
  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Está seguro de que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Cancelar la acción
          }
        },
        {
          text: 'Cerrar Sesión',
          handler: async () => {
            try {
              await this.fireservice.signOut();
              this.router.navigate(['/login']);
              this.userEmail = '';
              this.creationTime = '';
            } catch (err) {
              console.error(err);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }


  async cargarGMap(){
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 12,
      });
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
      this.onMapClick();
    } catch(e) {
      console.log(e);
    }
  }

  
  onMapClick() {
    this.mapClickListener = this.googleMaps.event.addListener(this.map, "click", (mapsMouseEvent) => {
      console.log(mapsMouseEvent.latLng.toJSON());
      this.addMarker(mapsMouseEvent.latLng);
    });
  }

  addMarker(location) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/icon/isotipo.png',
      scaledSize: new googleMaps.Size(50, 50), 
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      // draggable: true,
      animation: googleMaps.Animation.DROP
    });
    this.markers.push(marker);
    // this.presentActionSheet();
    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.checkAndRemoveMarker(marker);
      console.log('markers: ', this.markers);
    });
  }

  checkAndRemoveMarker(marker) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);
    if(index >= 0) {
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
      return;
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Added Marker',
      subHeader: '',
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Save',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    if(this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if(this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }


  
}
