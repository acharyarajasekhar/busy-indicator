import { Component, OnInit, Input } from '@angular/core';
import { LOADERS } from './busy-indicator.layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bi-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.css']
})
export class BusyIndicatorComponent implements OnInit {

  @Input() bdColor = 'rgba(0,0,0,0.3)';
  @Input() color = 'rgb(89,40,177, 1)';
  @Input() size = 'default';
  @Input() bgColor = '#fff';
  @Input() type = "timer";
  @Input() message = "Please Wait";

  divArray: Array<number> = [];
  divCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.divCount = LOADERS[this.type];
    this.divArray = Array(this.divCount).fill(0).map((x, i) => i);
  }

  getSpinnerClass(): string {
    let sizeClass = '';
    switch (this.size.toLowerCase()) {
      case 'small':
        sizeClass = 'la-sm';
        break;
      case 'medium':
        sizeClass = 'la-2x';
        break;
      case 'large':
        sizeClass = 'la-3x';
        break;
      default:
        break;
    }
    return 'la-' + this.type + ' ' + sizeClass;
  }

  ngOnDestroy() { }

}
