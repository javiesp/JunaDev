import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CuentaPage } from './cuenta.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2QLyYxzvEhgz61GOjCIu74hBsAGA4fm4",
  authDomain: "proyectowilson-77bef.firebaseapp.com",
  projectId: "proyectowilson-77bef",
  storageBucket: "proyectowilson-77bef.appspot.com",
  messagingSenderId: "158703055950",
  appId: "1:158703055950:web:28339c78759fb70f667f1f",
  measurementId: "G-XKWGVV421X"
};

describe('CuentaPage', () => {
  let component: CuentaPage;
  let fixture: ComponentFixture<CuentaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
