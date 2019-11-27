import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ParkingRoutingModule } from './parking-routing.module';

@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    ParkingRoutingModule,
    PagesModule,
  ],
})
export class ParkingModule { }
