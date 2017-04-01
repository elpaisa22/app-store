import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Cliente} from '../../models/cliente.model';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  clienteForm : FormGroup;
  infoId: number;

  constructor(public _fb: FormBuilder,
              private _activatedRoute: ActivatedRoute, public _router: Router,
              private _clienteService: ClienteService){
    this.isEdit(_fb);
	}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
       this.infoId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

  irAlListado () {
    this._router.navigate(['clientes']);
  }

  submitForm(clienteForm: Cliente): void{
    /*
    console.log('Form Data Request: ');
    console.log(this.clienteForm);
    console.log(this.infoId);
    this._clienteService.update(this.clienteForm).subscribe(
          (res: Response) => {
            if (res) {
                console.log('Success! Element updated');
            }
            else {
                alert('Error al guardar');
            }
            this._router.navigate(['./clientes']);
          }
      );
      */
      console.log('Form Data Request: ');
      console.log(clienteForm);

      if (clienteForm.id == null) {
        this._clienteService.insert(clienteForm).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element saved');
              }
              else {
                  alert('Error al guardar');
              }
              this._router.navigate(['./clientes']);
            }
        );
      } else {
        this._clienteService.update(clienteForm).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element updated');
              }
              else {
                  alert('Error al guardar');
              }
              this._router.navigate(['./clientes']);
            }
        );
      }
  }

  isEdit(fb){
      //console.log(params['id']);
      this._activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        if(id){
          this._clienteService.getById(id).subscribe(
              (res: Cliente) => {
                // Set value in personForm
                this.clienteForm.setValue(res);
              }
          );
        }
        this.clienteForm = fb.group({
           'id' : '',
           'nombre' : '',
           'apellido': '',
           'email' : '',
           'telefono' : '',
           'fechaNacimiento' : ''
        });
      });
  }
}
