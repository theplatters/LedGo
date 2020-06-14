import { Component, Input, OnInit } from '@angular/core'
import { ColorService } from './color.service'

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss'],

})
export class ColorPickerComponent implements OnInit{
  hue: string
  color: string

  constructor(private colorService : ColorService){
    this.colorService.colorChanged.subscribe( (c : string) => {

      this.color = c;
    });


  }

  ngOnInit(){
    this.color=this.colorService.color;
    this.hue=this.colorService.hue;
  }
}