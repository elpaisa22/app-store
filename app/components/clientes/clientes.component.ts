import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES } from 'angular2/router';

import {Cliente} from '../../models/cliente.model';
import {ClienteService} from '../../services/cliente.service';

@Component({
	templateUrl : 'app/components/clientes/clientes.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

		clientes: Cliente[];

		constructor(private _clienteService: ClienteService) { }

		/*
		* Retorna la lista de clientes
		*/
		getClientes() {
	    this.clientes = this._clienteService.getClientes();
	  }

		/*
		* Inicializacion
		*/
	  ngOnInit() {
	    this.getClientes();
	  }
}
