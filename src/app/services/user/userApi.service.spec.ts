import { TestBed } from '@angular/core/testing';

import { UserApiService } from './userApi.service';

describe('User.ApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
