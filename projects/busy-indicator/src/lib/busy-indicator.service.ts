import { Injectable } from '@angular/core';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { DynamicDomInjectorService } from '@acharyarajasekhar/dynamic-dom-injector';

@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {

  private compRef: any;
  options = {
    bdColor: "rgba(0, 0, 0, 0.5)",
    color: "#000",
    bgColor: "#fff",
    type: "timer",
    message: "Please wait",
    size: "default"
  };

  constructor(private domSvc: DynamicDomInjectorService) { }

  initialize(options?: any) {
    if (options) this.options = { ...this.options, ...options };
  }

  show() {
    if (!this.compRef) {
      this.compRef = this.domSvc.attach(BusyIndicatorComponent, this.options);
    }
  }

  update(message) {
    if (this.compRef) {
      this.compRef.instance.message = message;
    }
  }

  hide() {
    if (this.compRef) {
      this.domSvc.detach(this.compRef);
      this.compRef = undefined;
    }
  }
  
}
