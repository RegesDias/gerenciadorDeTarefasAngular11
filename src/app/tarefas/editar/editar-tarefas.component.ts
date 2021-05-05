import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Tarefa, TarefasService } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {
  public tarefa: Tarefa | any;

  @ViewChild('formEditar') formEditar: NgForm | any;
  constructor(private tarefasService: TarefasService, private router:Router, private route: ActivatedRoute) {
    this.tarefa = new Tarefa;
    this.formEditar  = null;
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefasService.buscarPorId(id);
  }
  atualizar(): void{
    if(this.formEditar.form.valid){
      this.tarefasService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas/listar']);
    }
  }

}
