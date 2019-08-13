import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ParkingComponent } from './modules/parking/parking.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import TicketReducers from './core/store/reducers/ticket.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({tickets: TicketReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
