import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

/* directives  */
import {SideNavDirective} from '../../directives/sidenav/sidenav.directive';
import {DropdownDirective} from '../../directives/dropdown/dropdown.directive';

/* components */
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ClienteComponent} from '../cliente/cliente.component';
import {ClientesComponent} from '../clientes/clientes.component';

@Component({
	selector: 'main-app',
	templateUrl : 'app/components/main/main.html',
  directives: [SideNavDirective, DropdownDirective, ROUTER_DIRECTIVES]
})
@RouteConfig([
	new Route({path: '/', name: 'Dashboard', component: DashboardComponent}),
	new Route({path: 'cliente/:id', name: 'Cliente', component: ClienteComponent}),
  new Route({path: 'clientes', name: 'Clientes', component: ClientesComponent})
])
export class MainComponent {
    text: string;
		display: boolean = false;
}
