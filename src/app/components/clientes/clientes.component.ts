import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Cliente} from '../../models/cliente.model';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(public http: Http, private _clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this._clienteService.getAll();
  }

  deleteInfo(id){
      if (confirm('Are you sure you want to delete info ' + id)) {
        this._clienteService.delete(id).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element deleted');
              }
              else {
                  alert('Error al eliminar');
              }
              this.clientes = this._clienteService.getAll();
            }
        );
      }
  }
}
