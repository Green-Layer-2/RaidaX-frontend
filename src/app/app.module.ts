import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import player from 'lottie-web/build/player/lottie_svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCheck, faCloudDownloadAlt, faCreditCard, faExclamationCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import { ApiService, DataService, DEFAULT_TIMEOUT } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';

export function playerFactory(): any {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

import { NgFileDragDropModule } from 'ng-file-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Raida_StatusModule } from './dashboard/raida-status/raida-status.module';
// import { WebView } from 'tns-core-modules';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory, useCache: true }),
    FontAwesomeModule,
    NgFileDragDropModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    Raida_StatusModule,
    ClickOutsideModule

  ],
  providers: [
    DataService,
    [{ provide: HTTP_INTERCEPTORS, useClass: ApiService, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 200000 }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faArrowLeft, faSync, faCheck, faCloudDownloadAlt, faCreditCard, faExclamationCircle);
  }
}
