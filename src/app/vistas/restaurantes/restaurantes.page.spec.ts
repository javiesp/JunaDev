import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RestaurantesPage } from './restaurantes.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Asegúrate de importar la versión compatible

const firebaseConfig = {
  apiKey: "AIzaSyA2QLyYxzvEhgz61GOjCIu74hBsAGA4fm4",
  authDomain: "proyectowilson-77bef.firebaseapp.com",
  projectId: "proyectowilson-77bef",
  storageBucket: "proyectowilson-77bef.appspot.com",
  messagingSenderId: "158703055950",
  appId: "1:158703055950:web:28339c78759fb70f667f1f",
  measurementId: "G-XKWGVV421X"
};

describe('RestaurantesPage', () => {
  let component: RestaurantesPage;
  let fixture: ComponentFixture<RestaurantesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantesPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule, // Asegúrate de importar la versión compatible
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
