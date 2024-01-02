import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataUpdateService } from '../../../services/user-data-update.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    user:boolean = true ;
    isSellerLoggedIn:any;
    please_wait:boolean = false;
    constructor(private userDataUpdate :UserDataUpdateService, private _route: Router ){}
    ngOnInit(): void {
      
    }
 
  storeLogInData(loginForm:NgForm){
      this.please_wait=true;
      this.userDataUpdate.userLogInGet().subscribe((res)=>{
        console.log(res);
        const user_x = res.find((a:any)=>{
             this.user = a.email_id === loginForm.value.emailid && a.password === loginForm.value.password;
            
           if(this.user){
            this.please_wait=false;
            let user_id:Number = a.id;
            loginForm.reset();

            localStorage.setItem('token',Math.random().toString());
            localStorage.setItem('uname',a.name.toString());
            
            if(a.adminCheck === true){
              this._route.navigate(['user-list']);
            }
            else{
              this._route.navigate([`todo-data/${user_id}`]);
            }

            }
        });
        
      });
    
  }

  

}
