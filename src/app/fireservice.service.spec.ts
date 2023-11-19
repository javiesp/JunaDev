import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FireserviceService } from './fireservice.service';

const environment = {
  apiKey: "AIzaSyA2QLyYxzvEhgz61GOjCIu74hBsAGA4fm4",
  authDomain: "proyectowilson-77bef.firebaseapp.com",
  projectId: "proyectowilson-77bef",
  storageBucket: "proyectowilson-77bef.appspot.com",
  messagingSenderId: "158703055950",
  appId: "1:158703055950:web:28339c78759fb70f667f1f",
  measurementId: "G-XKWGVV421X"
};

describe('FireserviceService', () => {
  let service: FireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment),
        AngularFireAuthModule,
      ],
      providers: [FireserviceService],
    });
    service = TestBed.inject(FireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
