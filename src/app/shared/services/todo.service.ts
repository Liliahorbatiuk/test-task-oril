import { Injectable } from '@angular/core';
import { ToDo } from '../classes/todo.model';
import { IToDo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Array<IToDo> = [
    {
      id: 1,
      userId: 0,
      title: 'Respond to Mike’s email',
      completed: false
    }
  ]
  constructor() { }

  getToDos(): Array<IToDo> {
    return this.todos;
  }

  setToDos(newToDo: IToDo): void {
    this.todos.push(newToDo);
  }
}
