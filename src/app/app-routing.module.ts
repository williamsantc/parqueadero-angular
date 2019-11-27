import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlConstants} from './shared/url.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: UrlConstants.ROUTE_BASE,
    pathMatch: 'full',
  },
{
  path: UrlConstants.ROUTE_BASE,
  children: [
    {
      path: '',
      loadChildren: './modules/parking/parking.module#ParkingModule',
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
