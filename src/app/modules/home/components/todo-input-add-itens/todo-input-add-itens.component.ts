import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{
 
  /*Output() - sempre que que o emmitItemTaskList estiver sendo
  utilizado em outro componente, e tiver alguma alteração
  irá refletir em todos os lugares que está sendo usado. */

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor(){}

  ngOnInit(): void {}

  public submitItemTaskList(){

    //remover para nao add string com espaços
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
