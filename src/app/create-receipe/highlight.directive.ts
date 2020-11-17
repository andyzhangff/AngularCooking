import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('hover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('leave');
  }

  private highlight(effect: string) {
    if(effect == 'hover'){
      this.el.nativeElement.style.boxShadow= '0 0 30px rgba(0,0,0,0.6)';
    }
    if(effect == 'leave'){
      this.el.nativeElement.style.boxShadow= null;
    }
  }

}
