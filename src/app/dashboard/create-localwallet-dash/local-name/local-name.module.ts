import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalNameComponent } from './local-name.component';
import { LocalNameRoutingModule } from './local-name-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LocalNameComponent],
  imports: [
    CommonModule,
    LocalNameRoutingModule,
    ReactiveFormsModule
  ]
})
export class LocalNameModule { }
