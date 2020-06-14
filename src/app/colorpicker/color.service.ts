import { Injectable , EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public color: string;
  public hue : string;


  colorChanged = new EventEmitter<string>()
  hueChanged = new EventEmitter<string>()


  setColor(c : string){
    
    this.color = c
    this.colorChanged.emit(c)
  }

  setHue(h : string){
    this.hue = h
    this.hueChanged.emit(this.hue)
  }

  constructor() { }
}
