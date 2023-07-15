import { Component } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public taskList: Array<TaskItem> = [
    { task: "Fazer meus exercícios", checked: true},
    { task: "Limpar casa", checked: false},
    { task: "Ir para academia", checked: true}
  ];

  public deleteItemTaskList(index: number){
    return this.taskList.splice(index, 1);
  }

  public deleteAllITems() {
    const confirm = window.confirm("Tem certeza que deseja excluir todas as tarefas?");
    if(confirm){
      this.taskList = [];
    }
  }

}
