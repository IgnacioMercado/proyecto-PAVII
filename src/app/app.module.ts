import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliasComponent } from './articulos-familias/articulos-familias.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
