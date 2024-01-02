import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  userName_ : any ="";
  rtr = new Router();
  title = 'routingTest';
  toLogin(){
    this.rtr.navigateByUrl('/login');
  }
  toSignUp(){
    this.rtr.navigateByUrl('/signUp');
  }
  toUserList(){
    this.rtr.navigateByUrl('/user-list');
  }
  toLogOut(){
    const conf = confirm("Are you sure to log out? ");
    if(conf){
      localStorage.removeItem('token');
      localStorage.removeItem('uname');
      this.rtr.navigateByUrl('/login');
    }
  }

  checkLoggedIn(){
     const token = localStorage.getItem('token');
     this.userName_ = localStorage.getItem('uname');
    
     return token;
  }
  
}
