import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Led } from './led.model';
import { ColorService } from 'src/app/colorpicker/color.service';
import { ColorPickerComponent } from 'src/app/colorpicker/colorpicker.component';
import { TimeframeService } from '../timeframe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';


//the ledgrid component, for selecting the leds in a timeframe

@Component({
  selector: 'app-led-picker',
  templateUrl: './led-picker.component.html',
  styleUrls: ['./led-picker.component.scss']
})
export class LedPickerComponent implements OnInit, OnDestroy {




  dragEnabled : boolean = true
  color : string;
  colorPickerShown : boolean = false;
  leds : Led[] = []
  id : any;
  colorChangeDetection : Subscription;

  @ViewChild('colorPickerIcon', {static : false}) colorPickerIcon : ElementRef;
  @ViewChild(ColorPickerComponent, {read: ElementRef}) cp :  ElementRef;

  constructor(private colorService : ColorService, private timeframeService : TimeframeService, private activatedRoute : ActivatedRoute, private router : Router) { 
    this.colorChangeDetection = this.colorService.colorChanged.subscribe( (c : string) => {
      this.color = c
    })
  }



  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;

    this.leds = this.timeframeService.getTimeframe(this.id).getLeds()
  }




  //---------------------------------------------------------------------
  //This block is responible vor coloring of the leds and drag and drop behavior, still needs work on mobile tho


  @HostListener('document:mousedown', ["$event"]) handleMD(e){
    this.dragEnabled = true;
  }

  @HostListener('document:mouseup', ["$event"]) handleMU(e){
    this.dragEnabled = false;
  }

  @HostListener('document:touchstart', ["$event"]) handleTD(e){
    console.log('ato')
    this.dragEnabled = true;
  }

  @HostListener('document:touchend', ["$event"]) handleTU(e){
    this.dragEnabled = false;
  }





  
  //------------------------------------------------------------------


  //showing the colorpicker

  @HostListener('document:click', ["$event"]) clickedOutside(e){
    if(this.colorPickerIcon.nativeElement.contains(e.target)){

      this.colorPickerShown = !this.colorPickerShown
    } else {
      if(this.colorPickerShown){
        
        if(!this.cp.nativeElement.contains(e.target)){


          this.colorPickerShown = !this.colorPickerShown
        }
      }
    }
  }







  setColorOfLed(led : Led ){
      led.color = this.color
  }


  setColorOfLedHov(led : Led ){
    if(this.dragEnabled){
      led.color = this.color
    }
  }

  finish(){
    this.router.navigate(['sequence'])
  }


  ngOnDestroy() {
    this.colorChangeDetection.unsubscribe();
  }
}
