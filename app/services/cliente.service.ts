import {Injectable} from 'angular2/core';
import {Cliente} from '../models/cliente.model';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [
      {"id": 11, "nombre": "Mr. Nice", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "02134542", "fechaNacimiento" : "31/11/2015"},
      {"id": 12, "nombre": "Narco", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "5464"},
      {"id": 13, "nombre": "Bombasto", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "654687"},
      {"id": 14, "nombre": "Celeritas", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "2135458"},
      {"id": 15, "nombre": "Magneta", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "985454"},
      {"id": 16, "nombre": "RubberMan", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "02134542"},
      {"id": 17, "nombre": "Dynama", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "5468787"},
      {"id": 18, "nombre": "Dr IQ", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "654878"},
      {"id": 19, "nombre": "Magma", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "897854"},
      {"id": 20, "nombre": "Tornado", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "2134545"}
  ];

  getClientes() {
    return this.clientes;
  }
}
