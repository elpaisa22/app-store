import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Cliente} from '../../models/cliente.model';
import {ClienteService} from '../../services/cliente.service';

import {PaginatorComponent} from '../_shared/paginator/paginator.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  totalPages = 0;
  page:number = 0;
  size:number = 5;

  constructor(public http: Http, private _clienteService: ClienteService) { }

  ngOnInit() {
    this.reloadData();
  }

  onPageChange($event){
		this.page = $event.value;
    this.reloadData();
	}

  reloadData() {
    this._clienteService.getAll(this.page, this.size).subscribe( result => {
      this.clientes = result.content;
      this.totalPages = result.totalPages;
      this.page = result.number;
    });
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
              this.reloadData();
            }
        );
      }
  }
}
