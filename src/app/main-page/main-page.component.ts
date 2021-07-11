import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToDo } from '../shared/classes/todo.model';
import { IToDo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  modalRef: BsModalRef;
  userToDo: Array<IToDo> = [];
  userId: number;
  todoId: number;
  todoTitle: string = '';
  todoComleted: boolean;

  constructor(private modalService: BsModalService,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodo();
  }

  openAddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEditModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openDeleteModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getTodo(): void {
    this.todoService.getTodos().subscribe(
      data => {
        this.userToDo = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  addTodo(): void {
    const newToDo = new ToDo(this.todoId, this.userId, this.todoTitle, this.todoComleted);
    console.log(newToDo);
    delete newToDo.id
    this.todoService.postTodos(newToDo).subscribe(() => {
      this.getTodo()
    })
    this.resetForm();
  }

  resetForm(): void {
    this.todoTitle = ''
  }

  change(i): void {
    if (this.userToDo[i].completed === false) {
      this.userToDo[i].completed = true;
    }
    else {
      this.userToDo[i].completed = false;
    }
  }

  deleteTodo(todo: IToDo): void {
    this.todoService.deleteTodos(todo).subscribe(() => {
      console.log('done');
      this.getTodo();
    })
  }

  editTodo(todo: IToDo): void {
    this.todoId = todo.id;
    this.todoTitle = todo.title;
  }

  saveEdit(): void {
    const updTodo = new ToDo(this.todoId, this.userId, this.todoTitle, this.todoComleted);
    this.todoService.updateTodos(updTodo).subscribe(() => {
      this.getTodo();
    })
    

  }

}

