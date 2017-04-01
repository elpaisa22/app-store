import {Directive, ElementRef, Input} from '@angular/core';

declare var jQuery:any;

@Directive({
    selector: '[m-dropdown]'
})
export class DropdownDirective {
    constructor(el: ElementRef) {
       jQuery(el.nativeElement).dropdown();
    }
}
