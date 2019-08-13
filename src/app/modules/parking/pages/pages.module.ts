import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [IndexComponent, IngresoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
