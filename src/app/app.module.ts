import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {storeConfig} from './core/store/config.store';
import {ParkingState, reducers} from './core/store/reducers/index';
import {ParkingComponent} from './modules/parking/parking.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot<ParkingState>(reducers, storeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
