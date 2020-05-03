import { Component } from '@angular/core';
import { BusyIndicatorService } from 'busy-indicator';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'busy-indicator-demo';

  constructor(private busy: BusyIndicatorService) {}

  show() {
    this.busy.show();
    setTimeout(() => {
      this.busy.hide();
    }, 2000);
  }

}
