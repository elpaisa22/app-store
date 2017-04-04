import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Producto} from '../../models/producto.model';
import {ProductoService} from '../../services/producto.service';

import {PaginatorComponent} from '../_shared/paginator/paginator.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  totalPages = 0;
  page:number = 0;
  size:number = 5;

  constructor(public http: Http, private _productoService: ProductoService) { }

  ngOnInit() {
    this.reloadData();
  }

  onPageChange($event){
		this.page = $event.value;
    this.reloadData();
	}

  reloadData() {
    this._productoService.getAll(this.page, this.size).subscribe( result => {
      this.productos = result.content;
      this.totalPages = result.totalPages;
      this.page = result.number;
    });
  }

  deleteInfo(id){
      if (confirm('Are you sure you want to delete info ' + id)) {
        this._productoService.delete(id).subscribe(
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
