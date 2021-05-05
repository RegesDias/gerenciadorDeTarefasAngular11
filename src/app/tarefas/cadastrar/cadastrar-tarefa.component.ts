import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefasService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
  public tarefa: Tarefa;

  @ViewChild('formTarefa') formTarefa: NgForm | any;
  constructor( private tarefaService : TarefasService , private router: Router) {
      this.tarefa = new Tarefa;
      this.formTarefa = null;
   }

  ngOnInit(): void {
  }
  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas/listar"])
    }
  }

}
