import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AngularFireModule} from '@angular/fire/compat';
import { environment} from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule],
  
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // BarcodeScanner
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
