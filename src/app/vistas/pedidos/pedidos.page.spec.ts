import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PedidosPage } from './pedidos.page';
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

describe('PedidosPage', () => {
  let component: PedidosPage;
  let fixture: ComponentFixture<PedidosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
      ],
      providers: [
        AngularFireDatabase,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
