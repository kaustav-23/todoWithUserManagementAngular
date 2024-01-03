import { Component } from '@angular/core';
import { UserDataUpdateService } from '../../services/user-data-update.service';
import { OnInit } from '@angular/core';
import { TodoDataUpdateService } from '../../services/todo-data-update.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList:any ;
  todoList:any;
  user_id:any;
  rtr = new Router();
  constructor(private userData:UserDataUpdateService , private todoData:TodoDataUpdateService,private activated_route:ActivatedRoute){
   
  }
  ngOnInit(): void {
    //----------------------start-------------------------------
    this.user_id = this.activated_route.snapshot.params['no']; //user id 
    console.log("user id is:", this.user_id);
    //------------------------end-----------------------------------
    this.userData.userGet().subscribe((data)=>{
      this.userList = data;
    });
  }

  deleteUser(id:number){
//-----------------------------------start:x----------------------
    
//-----------------------------------end:x---------------------------
    //-----------------------------start--------------------------
    this.todoData.todoGet(id).subscribe((data)=>{
      this.todoList = data;
      console.log("all todo datas of the user:", this.todoList);
      for(let item of this.todoList ){
        this.todoData.todoDelete(item.id).subscribe((res)=>{
          console.log("all todo data deleted");
          console.log("res is:",res);
        });
      }
      
    });
    //--------------------------------stop-----------------------
    
    this.userData.userDelete(id).subscribe((result:any ) => {
      console.log(result);
      this.ngOnInit();
    });
    
    //---------------------------------start:x-------------------
    if(this.user_id == id){
      localStorage.removeItem('token');
      localStorage.removeItem('uname');
      this.rtr.navigateByUrl('/login');
    }

    //--------------------------------end:x-----------------

  }
 

}
