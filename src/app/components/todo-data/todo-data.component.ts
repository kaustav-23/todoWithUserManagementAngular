import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoDataUpdateService } from '../../services/todo-data-update.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrl: './todo-data.component.css'
})
export class TodoDataComponent implements OnInit {
  user_id=0;
  todoDataAll :any;
  data = {};
  constructor(private todoData:TodoDataUpdateService, private activated_route:ActivatedRoute ){};
  
  ngOnInit(): void {
    this.user_id = this.activated_route.snapshot.params['userId']; //user id can  be fetched
    console.log("user_id *** is:", this.user_id);
    this.loadData();
  }

  loadData(){
    this.todoData.todoGet(this.user_id).subscribe((data)=>{
      this.todoDataAll = data;
      console.log("ngOnIt called");
      
    });
  }


  saveTodo(todo_data_value:any , todo_data:NgForm){
    
      todo_data_value.userId = this.user_id;
      todo_data_value.chkbox = false;
      this.todoData.todoPost(todo_data_value).subscribe(
        (result)=>{
        this.loadData();
        console.warn(result);
        todo_data.reset();
       });
    

  }

  deleteTodo(id:number){
    
    this.todoData.todoDelete(id).subscribe((result:any) => {
      console.log(result);
      this.loadData();
    });

  }

  updateChecked(iid:any,chk :boolean){

    console.log("check box is checked? :", chk ,"check box is of item id :", iid);
    this.data = {chkbox: chk}
    if(chk === true){
      
      this.todoData.todoUpdate(iid,this.data).subscribe((result)=>{
        console.log(result);
      })
    }
    else{
      this.todoData.todoUpdate(iid,this.data).subscribe((result)=>{
        console.log(result);
      })
    }
  }

  
}






  

