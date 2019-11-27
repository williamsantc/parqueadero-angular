import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingComponent } from './modules/parking/parking.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'parking',
  pathMatch: 'full',
},
{
  path: 'parking',
  component: ParkingComponent,
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
