import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingComponent } from './parking.component';

@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    ParkingRoutingModule,
    PagesModule
  ], exports: []
})
export class ParkingModule { }
