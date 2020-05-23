import { Injectable, NgZone } from '@angular/core';
import { UploadProgressIndicatorComponent } from './upload-progress-indicator.component';
import { DynamicDomInjectorService } from '@acharyarajasekhar/dynamic-dom-injector';

@Injectable({
  providedIn: 'root'
})
export class UploadProgressIndicatorService {

  private compRef: any;
  options = {
    icon: "cloud-upload-outline"
  };

  constructor(
    private domSvc: DynamicDomInjectorService,
    private ngZone: NgZone
  ) { }

  initialize(options?: any) {
    if (options) this.options = { ...this.options, ...options };
  }

  show() {
    if (!this.compRef) {
      this.compRef = this.domSvc.attach(UploadProgressIndicatorComponent, this.options);
    }
  }

  progress(status) {
    this.ngZone.run(async () => {
      if (this.compRef) {
        this.compRef.instance.message = status.message;
        this.compRef.instance.progress = status.progress;
      }
      return true;
    }).then();
  }

  hide() {
    if (this.compRef) {
      this.domSvc.detach(this.compRef);
      this.compRef = undefined;
    }
  }

}
