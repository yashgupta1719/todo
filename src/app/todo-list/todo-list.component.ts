import { Component, OnInit } from '@angular/core';
import { Todow } from '../todow.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private wr:Todow) { }

  ngOnInit() {
    this.WorkList= this.wr.getWork();
  }
  WorkList=[]
  su(name){
    this.WorkList.splice(this.WorkList.indexOf(name),1);
  }
}
