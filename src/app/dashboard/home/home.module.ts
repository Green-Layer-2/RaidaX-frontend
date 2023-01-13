import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LottieModule } from 'ngx-lottie';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jQuery';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClickOutsideModule,
    LottieModule,
    FontAwesomeModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
