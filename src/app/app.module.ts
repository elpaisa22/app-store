import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginatorComponent } from './components/_shared/paginator/paginator.component';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';

const appRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'clientes',  component: ClientesComponent },
  { path: 'cliente/add', component: ClienteComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'productos',  component: ProductosComponent },
  { path: 'producto/add', component: ProductoComponent },
  { path: 'producto/:id', component: ProductoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    MainComponent,
    DashboardComponent,
    ClientesComponent,
    ClienteComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
