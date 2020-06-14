import { Led } from './led-picker/led.model';


export class Timeframe{


    private lenght: number = 10;
    private leds : Led[];


    constructor(){
        this.lenght = 10;
        this.leds = Array.from({length : 96}, () => new Led()) //creates an empty led array
    }


    fillLeds() : void {
        
    }
    setLength(l : number) :void{
        this.lenght = l
    }

    getLenght() : number{
        return this.lenght
    }

    getLeds() : Led[] {

        console.log(this.leds)
        return this.leds.slice()
    }

}