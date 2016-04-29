import {Injectable} from 'angular2/core';
import {Cliente} from '../models/cliente.model';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [
      {"id": 11, "nombre": "Mr. Nice", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "02134542", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 12, "nombre": "Narco", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "5464", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 13, "nombre": "Bombasto", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "654687", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 14, "nombre": "Celeritas", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "2135458", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 15, "nombre": "Magneta", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "985454", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 16, "nombre": "RubberMan", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "02134542", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 17, "nombre": "Dynama", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "5468787", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 18, "nombre": "Dr IQ", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "654878", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 19, "nombre": "Magma", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "897854", "fechaNacimiento" : new Date(1988,3,15)},
      {"id": 20, "nombre": "Tornado", "apellido": "Zapata", "email" : "mrnice@gmail.com", "telefono" : "2134545", "fechaNacimiento" : new Date(1988,3,15)}
  ];

  getClientes() {
    return this.clientes;
  }
}
