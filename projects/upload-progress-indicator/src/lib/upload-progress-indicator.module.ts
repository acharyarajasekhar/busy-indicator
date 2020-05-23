import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProgressIndicatorComponent } from './upload-progress-indicator.component';

@NgModule({
  declarations: [UploadProgressIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports: [UploadProgressIndicatorComponent],
  entryComponents: [UploadProgressIndicatorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UploadProgressIndicatorModule { }
