import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_API_BASE_URL } from 'src/app/shared/user-api-injector/user-api-injector';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

  getUsersData(): Observable<User[]> {
    return this.http.get<User[]>(USER_API_BASE_URL)
  }
}
