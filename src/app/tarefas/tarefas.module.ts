import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar';
import { TarefasService, TarefaConcluidaDirective } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
