import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  searchText: string;

  constructor(private sharingService: SharingService) {
    this.searchText = '';
  }

  ngOnInit(): void { }
  
  onSearchTextChanged(): void {
    this.sharingService.searchText$Setter = this.searchText; 
  }
}
