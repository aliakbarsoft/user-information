import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { User } from '../auth/models/user';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#signIn', () => {
    it('should return expected user data on sign in', () => {
      const mockUserData: any = {
        user_id: 5,
        email: 'sfsdf@gmail.com',
        password: 'john@example.com',
      }; // Adjust mock data as needed
      const userData: User = { email: 'john@example.com', password: '123456' };

      service.signIn(userData).subscribe(user => {
        expect(user).toEqual(mockUserData);
      });

      const req = httpTestingController.expectOne(
        `${service.config}/auth/sign-in`
      );
      expect(req.request.method).toEqual('POST');
      req.flush(mockUserData);
    });
  });

  describe('#getAllUser', () => {
    it('should return all users data', () => {
      service.getAllUsers().subscribe(res => {
        expect(res).toBeTruthy();
      });
      const req = httpTestingController.expectOne(
        `${service.config}/users`
      );
      expect(req.request.method).toEqual('GET');
    });
  });
});