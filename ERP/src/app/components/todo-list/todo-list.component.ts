import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoText = "";
  todoList = [];

  constructor() { }

  addTodo() {
    console.log("Add To Do", this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = ""
  };

  

  ngOnInit(): void {
  }

}
