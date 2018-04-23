import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { ListaFimesComponent } from './lista-fimes/lista-fimes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';

import { FilmeService } from './filme.service';
import { FormPesquisaComponent } from './lista-fimes/form-pesquisa/form-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ListaFimesComponent, 
    FilmeCardComponent, FormPesquisaComponent
  ],

  exports: [ListaFimesComponent],

  providers: [FilmeService]
})
export class ConteudoModule { }
