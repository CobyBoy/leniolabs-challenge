import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private searchText$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  private sharingUsersList$: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  private filteredUsersList$: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);

  constructor() {}

  get sharingUsersList$Getter(): Observable<User[]> {
    return this.sharingUsersList$.asObservable();
  }

  get searchText$Getter(): Observable<string> {
    return this.searchText$.asObservable();
  }

  get filteredUsersList$Getter(): Observable<User[]> {
    return this.filteredUsersList$.asObservable();
  }

  set sharingUsersList$Setter(users: User[]) {
    this.sharingUsersList$.next(users);
  }

  set searchText$Setter(searchText: string) {
    this.searchText$.next(searchText);
    this.filterUsersBySearchText(searchText);
  }

  set filteredUsersList$Setter(users: User[]) {
    this.filteredUsersList$.next(users);
  }

  filterUsersBySearchText(searchText: string): void {
    this.sharingUsersList$Getter
      .pipe(
        map((users) =>
          users.filter((user) =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      )
      .subscribe((users) => (this.filteredUsersList$Setter = users));
  }
}
