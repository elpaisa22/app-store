import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	templateUrl : 'app/components/cliente/cliente.html',
	directives: [ROUTER_DIRECTIVES]
})
export class ClienteComponent{

	cliente : Object = { nombre : "Juan Carlos", email : "juanca@gmail.com"}; 

	constructor(private _router: Router){
	}

	irAlListado () {
		this._router.navigate(['Clientes']);
	}
}
