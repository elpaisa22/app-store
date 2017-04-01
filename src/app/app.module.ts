import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const appRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'clientes',  component: ClientesComponent },
  { path: 'cliente/add', component: ClienteComponent },
  { path: 'cliente/:id', component: ClienteComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ClientesComponent,
    ClienteComponent
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
