import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    const part = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(part, 'show');
  }

  @HostListener('mouseout')
  onMouseOut() {
    const part = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.removeClass(part, 'show');
  }

}
