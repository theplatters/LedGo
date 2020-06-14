import { Component, OnInit } from '@angular/core';
import { TimeframeService } from '../timeframe-editor/timeframe.service';

@Component({
  selector: 'app-sequence-mode',
  templateUrl: './sequence-mode.component.html',
  styleUrls: ['./sequence-mode.component.scss']
})
export class SequenceModeComponent implements OnInit {

  constructor(private timeFrameService : TimeframeService) { }

  ngOnInit(): void {
  }

  turnOn() : void {
    this.timeFrameService.sendToServer();
  }

}
