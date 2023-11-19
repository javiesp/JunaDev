import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionPage } from './configuracion.page';

import {FireserviceService} from 'src/app/fireservice.service';// Ajusta la ruta según tu estructura de archivos
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const yourFirebaseConfig = {
  apiKey: "AIzaSyA2QLyYxzvEhgz61GOjCIu74hBsAGA4fm4",
  authDomain: "proyectowilson-77bef.firebaseapp.com",
  projectId: "proyectowilson-77bef",
  storageBucket: "proyectowilson-77bef.appspot.com",
  messagingSenderId: "158703055950",
  appId: "1:158703055950:web:28339c78759fb70f667f1f",
  measurementId: "G-XKWGVV421X"
};

describe('ConfiguracionPage', () => {
  let component: ConfiguracionPage;
  let fixture: ComponentFixture<ConfiguracionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(yourFirebaseConfig),
        AngularFireAuthModule,
      ],
      providers: [FireserviceService], // Asegúrate de que el servicio esté proporcionado aquí
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
