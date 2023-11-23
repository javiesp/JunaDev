import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FireserviceService } from './fireservice.service';
import { environment } from 'src/environments/environment';



describe('FireserviceService', () => {
  let service: FireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
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
