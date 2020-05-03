import { NgModule } from '@angular/core';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports: [BusyIndicatorComponent],
  entryComponents: [BusyIndicatorComponent]
})
export class BusyIndicatorModule { }
