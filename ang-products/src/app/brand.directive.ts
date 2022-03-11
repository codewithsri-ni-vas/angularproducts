import { Directive,ElementRef,HostListener } from '@angular/core';
 

@Directive({
  selector: '[appBrand]'
})
export class BrandDirective {

  constructor(private _elementRef:ElementRef) {

   }

   @HostListener('mouseenter') onEnter(){
      this._elementRef.nativeElement.style.background="black";
      this._elementRef.nativeElement.style.color="white";
   }


}
