import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserDataUpdateService {

  url_userData = "https://angular-todo-app-users-data.onrender.com/obj"

  constructor(private http:HttpClient) { }
  userPost(data: any){
  return this.http.post(this.url_userData,data);
  }
  userGet(){
    return this.http.get(this.url_userData);
  }
  userDelete(id:number){
    return this.http.delete(`${this.url_userData}/${id}`);
  }
  userLogInGet(){
    return this.http.get<any>(this.url_userData);
  }
}
