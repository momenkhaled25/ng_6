import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCardProduct]',
  standalone: true
})
export class CardProductDirective  implements OnChanges{
  // @Input() externalColor: string = 'pink';
  @Input('appCardProduct') defaultColor: string = 'red';
  constructor(private ele: ElementRef) {
   
}

  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
    this.ele.nativeElement.style.borderRadius = '0px 0px 10px 10px';
    this.ele.nativeElement.style.boxShadow= "0 8px 16px  0 rgba(0,0,0,0.4)";
    this.ele.nativeElement.style.transition = '.3s'

  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.borderRadius = '0px 0px 20px 20px';
    this.ele.nativeElement.style.boxShadow= "0 8px 16px  0 rgba(0,0,0,0.1)";

  }

  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.borderRadius = '0px 0px 10px 10px';
    this.ele.nativeElement.style.boxSadow = '0px 5px 10px 0px rgba(0, 0, 0, 0.5)';
    this.ele.nativeElement.style.boxShadow= "0 8px 16px  0 rgba(0,0,0,0.4)";
  }

}
