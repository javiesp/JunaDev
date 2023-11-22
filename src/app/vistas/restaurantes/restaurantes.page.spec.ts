import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RestaurantesPage } from './restaurantes.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; 
import { environment } from 'src/environments/environment';

const firebaseConfig= environment.firebaseConfig;

describe('RestaurantesPage', () => {
  let component: RestaurantesPage;
  let fixture: ComponentFixture<RestaurantesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantesPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule, 
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
