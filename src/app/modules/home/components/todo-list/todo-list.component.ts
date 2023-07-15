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

}
