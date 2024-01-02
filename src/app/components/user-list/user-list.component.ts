import { Component } from '@angular/core';
import { UserDataUpdateService } from '../../services/user-data-update.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList:any ;
  

  constructor(private userData:UserDataUpdateService){
   
  }
  ngOnInit(): void {
    this.userData.userGet().subscribe((data)=>{
      this.userList = data;
    });
  }

  deleteUser(id:number){
    this.userData.userDelete(id).subscribe((result:any) => {
      console.log(result);
      this.ngOnInit();
    });
    
  }
 

}
