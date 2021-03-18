import { Component, OnInit } from '@angular/core';
import {ToDo} from "./../../models/Todo";

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos: ToDo[] = [];

  completeTask:ToDo[]=[];
  deletedTask:ToDo[]=[];

  inputTask:string | undefined

  constructor() { }

  ngOnInit(): void {
    this.todos = [

    ]
  }

  taskDone(id: number){
    
    
    this.todos.map(
      (v,i)=>{
        if (i==id) v.completed= !v.completed;
        return v;
      }
    )
    if (this.todos[id].completed){
      if (!this.completeTask.includes(this.todos[id])){
        this.completeTask.push(this.todos[id])
      }
    }else{
      for(var i = 0; i<this.completeTask.length; i++){
        if (this.completeTask[i]==this.todos[id]){
          this.completeTask.splice(i,1);
        }
      }
    }
    
  }
  taskDelete(id:number){
    this.deletedTask.push(this.todos[id])

    this.todos= this.todos.filter(
      (v,i)=>i!==id
    );
  }
  taskAdd(){
    if (this.inputTask){
      this.todos.push(
        {
          content:this.inputTask,
          completed:false
        }
      )
      this.inputTask=""
    }
  }

}

