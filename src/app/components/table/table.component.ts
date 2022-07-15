import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SharingService } from 'src/app/services/sharing.service';
import { TableService } from 'src/app/services/table.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  numberOfRows: number = 0;
  columns: string[];
  userListFiltered$: Observable<User[]>;

  constructor(
    private tableService: TableService,
    private sharingService: SharingService
  ) {
    this.columns = [
      'createdAt',
      'name',
      'avatar',
      'zip',
      'last_name',
      'job_area',
    ];
    this.userListFiltered$ = this.sharingService.filteredUsersList$Getter;
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.tableService
      .getUsersData()
      .pipe(
        tap((users: User[]) => (this.totalRowCountSetter = users.length)),
        map((users: User[]) =>
          users.sort((a, b) => a.job_area.localeCompare(b.job_area))
        )
      )
      .subscribe((users: User[]) => {
        this.sharingService.sharingUsersList$Setter = users;
        this.sharingService.filteredUsersList$Setter = users;
      });
  }

  get totalRowCount(): number {
    return this.numberOfRows;
  }

  set totalRowCountSetter(_usersLength: number) {
    this.userListFiltered$.subscribe((users: User[]) => this.numberOfRows  = users.length)
  }

  identify(_index: number, user: User): string {
    return user.id;
  }
}
