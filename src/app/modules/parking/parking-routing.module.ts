import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'ingreso', component: IngresoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ParkingRoutingModule { }
