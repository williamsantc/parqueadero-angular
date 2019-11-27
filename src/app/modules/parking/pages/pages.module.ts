import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { IndexComponent } from './index/index.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [IndexComponent, IngresoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
