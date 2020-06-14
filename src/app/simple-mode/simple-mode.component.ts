import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TimeframeService } from '../timeframe-editor/timeframe.service';

@Component({
  selector: 'app-simple-mode',
  templateUrl: './simple-mode.component.html',
  styleUrls: ['./simple-mode.component.scss']
})
export class SimpleModeComponent implements OnInit {

  post : Observable<any>;

  readonly ROOT_URL = environment['LED_HANDLER_IP'];

  activeColor : string;
  isTurnedOn : boolean = false;
  
  selectedColor : Element;
  colors : string[]= ["0x801010", "0x801180", "0x6284FF", "0x8CA5FF", "0x8CEAFF", "0x198080", "0x008000", "0x908000", "0x905012", "0xFFFFFF"]

  constructor(private http : HttpClient) {
    
   }

  ngOnInit(): void {
  
  }

  colorClicked(e : Event, color : string){ 
    this.activeColor = color;

    if(this.isTurnedOn){
      let data = {
        color : this.activeColor
      }
      this.http.post(this.ROOT_URL + "/test", data).subscribe()
    }
  }

  toggleOn(){

    if(!this.isTurnedOn){
      this.isTurnedOn = true
      this.http.post(this.ROOT_URL + "/off", {}).subscribe()
      

    }else{
      if(this.activeColor != undefined){
        this.isTurnedOn = false

        let data = {
          color : this.activeColor
        }
        this.http.post(this.ROOT_URL + "/test", data).subscribe()
        
      }

    }

  }


  

}
