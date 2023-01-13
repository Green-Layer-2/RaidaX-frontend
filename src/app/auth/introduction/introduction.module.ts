import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import { LottieModule } from 'ngx-lottie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    LottieModule,
    FontAwesomeModule
  ]
})
export class IntroductionModule { }
