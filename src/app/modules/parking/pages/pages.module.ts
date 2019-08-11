import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [IndexComponent, IngresoComponent],
  imports: [
  ],
  exports: [
    IndexComponent, IngresoComponent
  ]
})
export class PagesModule { }
