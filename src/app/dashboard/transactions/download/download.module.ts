import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class DownloadModule { }
