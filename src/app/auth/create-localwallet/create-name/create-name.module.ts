import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateNameRoutingModule } from './create-name-routing.module';
import { CreateNameComponent } from './create-name.component';


@NgModule({
  declarations: [CreateNameComponent],
  imports: [
    CommonModule,
    CreateNameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateNameModule { }
