import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';


import { RegistroPage } from './registro.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  const firebaseConfig = {
    apiKey: "AIzaSyA2QLyYxzvEhgz61GOjCIu74hBsAGA4fm4",
    authDomain: "proyectowilson-77bef.firebaseapp.com",
    projectId: "proyectowilson-77bef",
    storageBucket: "proyectowilson-77bef.appspot.com",
    messagingSenderId: "158703055950",
    appId: "1:158703055950:web:28339c78759fb70f667f1f",
    measurementId: "G-XKWGVV421X"
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule
      ],
      providers: [FireserviceService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
