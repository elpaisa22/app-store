import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Producto} from '../../models/producto.model';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  productoForm : FormGroup;
  infoId: number;

  constructor(public _fb: FormBuilder,
              private _activatedRoute: ActivatedRoute, public _router: Router,
              private _productoService: ProductoService){
    this.isEdit(_fb);
	}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
       this.infoId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

  irAlListado () {
    this._router.navigate(['productos']);
  }

  submitForm(productoForm: Producto): void{
      console.log('Form Data Request: ');
      console.log(productoForm);

      if (productoForm.id == null) {
        this._productoService.insert(productoForm).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element saved');
              }
              else {
                  alert('Error al guardar');
              }
              this._router.navigate(['./productos']);
            }
        );
      } else {
        this._productoService.update(productoForm).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element updated');
              }
              else {
                  alert('Error al guardar');
              }
              this._router.navigate(['./productos']);
            }
        );
      }
  }

  isEdit(fb){
      this._activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        if(id){
          this._productoService.getById(id).subscribe(
              (res: Producto) => {
                // Set value in personForm
                this.productoForm.setValue(res);
              }
          );
        }
        this.productoForm = fb.group({
           'id' : '',
           'codigo' : '',
           'descripcion': '',
           'detalles' : '',
           'pie' : '',
           'precio' : '',
           'stock' : '',
           'categoria' : '',
           'imagen1' : '',
           'imagen2' : '',
           'imagenDetalle1' : '',
           'imagenDetalle2' : '',
           'imagenDetalle3' : ''
        });
      });
  }
}
