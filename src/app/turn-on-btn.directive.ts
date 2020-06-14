import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTurnOnBtn]'
})
export class TurnOnBtnDirective {
  isActive = false;
  @HostBinding('class.on') on = false;


  @HostListener('click') toggleActive(event: Event) {

    this.on = !this.on

  }
  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

}
