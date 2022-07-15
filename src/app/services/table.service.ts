import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { catchError, Observable, of } from 'rxjs';
import { LogService } from './log.service';
import { UserApiService } from './user/userApi.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private logService: LogService, private userApi: UserApiService) { }

  getUsersData(): Observable<User[]> {
    return this.userApi.getUsersData()
      .pipe(catchError((error) => { this.logService.onError(error.error); return of([]);}));
  }
}
