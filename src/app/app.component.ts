import { Component } from '@angular/core';
import { BusyIndicatorService } from 'projects/busy-indicator/src/public-api';
import { UploadProgressIndicatorService } from 'projects/upload-progress-indicator/src/public-api';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'busy-indicator-demo';

  constructor(
    private busy: BusyIndicatorService,
    private uploadProgress: UploadProgressIndicatorService
  ) { }

  show() {
    this.busy.show();
    setTimeout(() => {
      this.busy.hide();
    }, 2000);
  }

  upload() {
    this.uploadProgress.show();
    let p = 0;
    let handle = setInterval(() => {
      if (p <= 100) {
        this.uploadProgress.progress({
          message: "Uploading",
          progress: p
        });
      }
      p = p + 20;
    }, 500);
    setTimeout(() => {
      clearInterval(handle);
      this.uploadProgress.hide();
    }, 4000);
  }

}
