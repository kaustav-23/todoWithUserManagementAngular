import { Component} from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'todo2';
  obj:any;
  updateDataToUserList(item:any){
    this.obj = item ;
    console.log(this.obj);
  }
}
