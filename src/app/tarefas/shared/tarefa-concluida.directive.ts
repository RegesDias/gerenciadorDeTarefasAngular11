import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {
  @Input() tarefaConcluida: boolean | any;

  constructor( private el: ElementRef) { 
    this.tarefaConcluida = false;
  }
  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through"
    }

  }

}
