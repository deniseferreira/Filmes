import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ListaFimesComponent } from './lista-fimes/lista-fimes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';

import { FilmeService } from './filme.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ListaFimesComponent, 
    FilmeCardComponent
  ],

  exports: [ListaFimesComponent],

  providers: [FilmeService]
})
export class ConteudoModule { }
