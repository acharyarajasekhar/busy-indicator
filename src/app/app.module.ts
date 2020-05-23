import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusyIndicatorModule } from 'projects/busy-indicator/src/public-api';
import { UploadProgressIndicatorModule } from 'projects/upload-progress-indicator/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BusyIndicatorModule,
    UploadProgressIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
