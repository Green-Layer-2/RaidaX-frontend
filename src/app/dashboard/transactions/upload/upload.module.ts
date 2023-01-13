import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

import {NgFileDragDropModule} from  'ng-file-drag-drop';
import { LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    NgFileDragDropModule,
    LottieModule,
    FormsModule
  ]
})
export class UploadModule { }
