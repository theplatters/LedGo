import { Injectable } from '@angular/core';
import { Timeframe } from './timeframe.model';
import { Led } from './led-picker/led.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeframeService {

private timeframes : Timeframe[] = [new Timeframe()];
private post;

timeframesChanged = new Subject<Timeframe[]>();



setLedConfig(timeframeIndex : number, leds : Led[]){

}

addTimeframe(timeframe : Timeframe){

  this.timeframes.push(timeframe);
  this.timeframesChanged.next(this.timeframes)
}

getTimeframes  () :Timeframe[] {
  return this.timeframes.slice()
}

getTimeframe(i : number) : Timeframe{
  return this.timeframes[i]
}

sendToServer() {
  console.log(this.timeframes);
  this.post = this.http.post(environment['LED_HANDLER_IP']+"/sequence", this.timeframes).subscribe()
}
  constructor(private http : HttpClient) { }
}
  