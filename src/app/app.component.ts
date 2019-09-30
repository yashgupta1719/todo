import { Component } from '@angular/core';
import {Todow} from './todow.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private wo:Todow){}
  title = 'todo';
  w
  addWork(){
    const work={
       name:this.w
    }
    this.wo.setWork(work)
  }
}
