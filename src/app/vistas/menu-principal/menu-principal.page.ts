import { Component, OnInit, Renderer2, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { GmapsService } from 'src/app/servicios/gmaps.service';




@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})

export class MenuPrincipalPage implements OnInit, OnDestroy {
  restaurantes: any[] = [];
  menuRestaurante: any[];
  restauranteSeleccionado: any;

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  center = { lat: -33.59792458336969, lng: -70.70543417692222 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];


  constructor(private router: Router,
              private loadingController: LoadingController,
              private db: AngularFireDatabase, 
              private afAuth: AngularFireAuth,
              private gmaps: GmapsService,
              private renderer: Renderer2,
              private actionSheetCtrl: ActionSheetController
              ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    if(this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if(this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cargarGMap();
  }


  //Funcion para mostrar los tipos de restarantes
  getMenuRestaurante(restauranteId: string) {
    const restaurante = this.restaurantes.find((rest) => rest.id === restauranteId);
    if (restaurante) {
      this.restauranteSeleccionado = restaurante.nombre;
      this.menuRestaurante = restaurante.menu;
    }
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando, espere un momento...', // Mensaje que se mostrará
      duration: 500 // Duración en milisegundos (ajusta según tus necesidades)
    });
    
    await loading.present();
    
    //Carga los elementos a listar
    this.db.list('restaurantes').valueChanges().subscribe((data: any[]) => { //Busca la data y las guarda en this.restaurantes
      this.restaurantes = data;
    });
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



  

}
