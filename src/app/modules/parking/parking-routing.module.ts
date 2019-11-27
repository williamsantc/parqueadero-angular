import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UrlConstants} from '../../shared/url.constants';
import { IndexComponent } from './pages/index/index.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import {ParkingComponent} from './parking.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingComponent,
    children: [
      { path: UrlConstants.URL_LANDING_PAGE, component: IndexComponent },
      { path: UrlConstants.URL_ENTRY, component: IngresoComponent },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ParkingRoutingModule { }
