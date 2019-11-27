import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingComponent } from './parking.component';

@NgModule({
  declarations: [ParkingComponent],
  imports: [
    ComponentsModule,
    ParkingRoutingModule,
    PagesModule,
    SharedModule,
  ],
})
export class ParkingModule { }
