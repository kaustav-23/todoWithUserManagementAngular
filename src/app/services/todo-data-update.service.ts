import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataUpdateService {

  url_todoData ="https://angular-todo-app-todo-data.onrender.com/userToDo"
  

  constructor(private http:HttpClient) { }

  todoPost(data: any){
    return this.http.post(this.url_todoData,data);
    }

  todoGet(uid:any){
      return this.http.get(`${this.url_todoData}?userId=${uid}`);
    }

  todoDelete(id:any){
    return this.http.delete(`${this.url_todoData}/${id}`);
  }

  todoUpdate(id:any,data:any){
    return this.http.patch(`${this.url_todoData}/${id}`,data);
  }
}
