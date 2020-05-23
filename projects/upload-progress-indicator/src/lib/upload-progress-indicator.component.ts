import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-upload-progress-indicator',
  templateUrl: './upload-progress-indicator.component.html',
  styleUrls: ['./upload-progress-indicator.component.css']
})
export class UploadProgressIndicatorComponent implements OnInit, OnDestroy {

  @Input() bdColor = 'rgba(0,0,0,0.3)';
  @Input() bgColor = 'rgb(255, 255, 255, 1)';
  @Input() color = 'rgb(54, 62, 71, 1)';

  @Input() message: string = "Updating...";
  @Input() progress: number = -1;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

}
