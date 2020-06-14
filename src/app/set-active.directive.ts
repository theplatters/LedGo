import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetActive]'
})
export class SetActiveDirective {
  isActive = false;
  @HostBinding('style.border') border : string;

  @HostListener('document:click', ['$event']) toggleActive(event: Event) {
    this.border = this.elRef.nativeElement.contains(event.target) ? "1px solid blue" : "";
  }
  constructor(private elRef : ElementRef) { }

}
