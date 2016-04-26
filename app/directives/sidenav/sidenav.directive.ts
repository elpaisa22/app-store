import {Directive, ElementRef, Input} from 'angular2/core';

declare var jQuery:any;

@Directive({
    selector: '[m-sidenav]'
})
export class SideNavDirective {
    constructor(el: ElementRef) {
       jQuery(el.nativeElement).sideNav({
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       });
    }
}
