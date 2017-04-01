import {Injectable} from '@angular/core';
import {Cliente} from '../models/cliente.model';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ClienteService {

  constructor(public http: Http) { }

  getAll() : Observable<Cliente[]> {
    return this.http.get('http://localhost:8080/cliente')
                  .map(response => <Cliente[]>response.json());
  }

  getById(id) {
    return this.http.get('http://localhost:8080/cliente/'+id)
                    .map(res => <Cliente>res.json());
  }

  insert(cliente) {
    return this.http.post('http://localhost:8080/cliente', cliente);
  }

  update(cliente) {
    return this.http.put('http://localhost:8080/cliente/', cliente);
  }

  delete(id){
    return this.http.delete('http://localhost:8080/cliente/'+id)
  }
}
