import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private toastr: ToastrService) { }

  onError(message: string) {
    this.toastr.error(message);
  }
}
