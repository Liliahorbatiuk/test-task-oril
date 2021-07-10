import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../classes/todo.model';
import { IToDo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Array<IToDo> = [
    {
      id: 0,
      userId: 0,
      title: 'Respond to Mike’s email',
      completed: false
    }
  ]
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/todos';
    // this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  // getToDos(): Array<IToDo> {
  //   return this.todos;
  // }

  getTodos(): Observable<Array<IToDo>> {
    return this.http.get<Array<IToDo>>(this.url);
  }

  postTodos(todo: IToDo): Observable<IToDo> {
    return this.http.post<IToDo>(this.url, todo);
  }

  updateTodos(todo: IToDo): Observable<IToDo> {
    return this.http.put<IToDo>(`${this.url}/${todo.id}`, todo);
    // return this.http.put<IToDo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
  }

  deleteTodos(todo: IToDo): Observable<IToDo> {
    return this.http.delete<IToDo>(`${this.url}/${todo.id}`);
    // return this.http.delete<IToDo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
  }

  setToDos(newToDo: IToDo): void {
    this.todos.push(newToDo);
  }



  // deleteTodos(id: number): void {
  //   const index = this.todos.findIndex(t => t.id === id);
  //   this.todos.splice(index, 1)
  // }

  // updateTodos(todo: IToDo): void {
  //   const index = this.todos.findIndex(t => t.id === todo.id);
  //   this.todos.splice(index, 1, todo);
  // }
}
