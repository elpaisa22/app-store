import {Component, ElementRef, Inject, AfterViewInit} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

declare var jQuery:any;

@Component({
	selector: 'main',
	templateUrl : 'app/components/main/main.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MainComponent implements AfterViewInit {
    text: string;
		display: boolean = false;

		elementRef: ElementRef;

	  constructor(@Inject(ElementRef) elementRef: ElementRef) {
	      this.elementRef = elementRef;
	  }

	  ngAfterViewInit() {
				// Initialize collapse button
	      jQuery(this.elementRef.nativeElement).find('.button-collapse').sideNav({
		      //menuWidth: 300, // Default is 240
		      //edge: 'left'// Choose the horizontal origin
		      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		    	}
			);

				// Initialize collapsible (uncomment the line below if you use the dropdown variation)
				/*
				jQuery(this.elementRef.nativeElement).find('.collapsible').collapsible();
				*/
	  }

    showDialog() {
        this.display = true;
    }
}
