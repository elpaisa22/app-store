import {Component, ElementRef, Inject, AfterViewInit} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ClienteComponent} from '../cliente/cliente.component';
import {ClientesComponent} from '../clientes/clientes.component';

declare var jQuery:any;

@Component({
	selector: 'main-app',
	templateUrl : 'app/components/main/main.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	new Route({path: '/', name: 'Dashboard', component: DashboardComponent}),
	new Route({path: 'cliente/:id', name: 'Cliente', component: ClienteComponent}),
  new Route({path: 'clientes', name: 'Clientes', component: ClientesComponent})
])
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
		      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		    	}
				);

				jQuery(this.elementRef.nativeElement).find(".dropdown-button").dropdown();
	  }
}
