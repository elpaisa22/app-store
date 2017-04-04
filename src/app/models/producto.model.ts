import {Categoria} from './categoria.model';

export class Producto {
  id: number;
  codigo: string;
  descripcion: string;
  detalles: string;
  pie: string;
  precio: number;
  stock: number;
  categoria: Categoria;
}
