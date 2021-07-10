import { Component, OnInit, TemplateRef  } from '@angular/core';
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
  todoTitle: string;
  todoComleted: boolean;

  constructor(private modalService: BsModalService,
              private todoService: TodoService) {}
  
  ngOnInit(): void {
    this.getTodo();
    // this.addTodo();
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
    this.userToDo = this.todoService.getToDos();
  } 

  addTodo(): void {
    const newToDo = new ToDo(1, this.userId, this.todoTitle, this.todoComleted);
    console.log(newToDo);
    this.resetForm();
  }

  resetForm(): void {
    this.todoTitle = ''
  }

  change(i): void {
    if (this.userToDo[i].completed === false){
      this.userToDo[i].completed = true;
    }
    else{
      this.userToDo[i].completed = false;
    }
  }
}
 
