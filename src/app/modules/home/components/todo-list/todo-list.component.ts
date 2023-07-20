import { Component, DoCheck } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck{

  public taskList: Array<TaskItem> = [ ];


  public ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );

  }

  public deleteItemTaskList(index: number){
    return this.taskList.splice(index, 1);
  }

  public deleteAllITems() {
    const confirm = window.confirm("Tem certeza que deseja excluir todas as tarefas?");
    if(confirm){
      this.taskList = [];
    }
  }

  public setEmitTaskList(item: any){
    return this.taskList.push({ task: item, checked: false})
  }

}
