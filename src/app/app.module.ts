import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { SharingService } from './services/sharing.service';

@NgModule({
  declarations: [AppComponent, InputComponent, TableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: 'toast-center-center',
    }),
    BrowserAnimationsModule,
  ],
  providers: [SharingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
