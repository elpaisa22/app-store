import {Injectable} from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import {Result} from '../models/result.model';
import {Producto} from '../models/producto.model';

@Injectable()
export class ProductoService {

  constructor(public http: Http) { }

  getAll(page:number, size:number) : Observable<Result> {
    return this.http.get('http://localhost:8080/producto?page='+page+'&size='+size)
                    .map(response => <Result>response.json());
  }

  getById(id) {
    return this.http.get('http://localhost:8080/producto/'+id)
                    .map(res => <Producto>res.json());
  }

  insert(cliente) {
    return this.http.post('http://localhost:8080/producto', cliente);
  }

  update(cliente) {
    return this.http.put('http://localhost:8080/producto/', cliente);
  }

  delete(id){
    return this.http.delete('http://localhost:8080/producto/'+id)
  }
}
