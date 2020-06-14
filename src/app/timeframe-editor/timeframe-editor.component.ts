import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Timeframe } from './timeframe.model';
import { MatSliderChange } from '@angular/material/slider';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeframeService } from './timeframe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timeframe-editor',
  templateUrl: './timeframe-editor.component.html',
  styleUrls: ['./timeframe-editor.component.scss']
})
export class TimeframeEditorComponent implements OnInit, OnDestroy {

  timeframes : Timeframe[];
  timeframeChangeDetection : Subscription;

  changeDuration(e : MatSliderChange, i : number){

    this.timeframes[i].setLength(e.value);
  }

  constructor(private router : Router, private route : ActivatedRoute, private timeframeService : TimeframeService) { }

  ngOnInit(): void {
    this.timeframes = this.timeframeService.getTimeframes();

  
  this.timeframeChangeDetection = this.timeframeService.timeframesChanged.subscribe( (timeframes) => {
      this.timeframes = timeframes;
    })
  }

  addTimeframe(){
    this.timeframeService.addTimeframe(new Timeframe())
  }

  openLedGrid(i : number){
    this.router.navigate(['ledgrid'], {queryParams: {id : i}, relativeTo : this.route})
  }


  ngOnDestroy(){
    this.timeframeChangeDetection.unsubscribe();
  }

}
