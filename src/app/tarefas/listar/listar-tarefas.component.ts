import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefasService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas:Tarefa[];

  constructor(private TarefasService: TarefasService, private route: ActivatedRoute) {
    this.tarefas = [];
  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.TarefasService.listarTodos();
  }
  remover($event:any, tarefa: Tarefa ): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.nome +'"?')){
      this.TarefasService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
  alterarStatus(tarefa: Tarefa): void{
    if(confirm('Deseja alterar status da tarefa "' + tarefa.nome +'"?')){
      this.TarefasService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
