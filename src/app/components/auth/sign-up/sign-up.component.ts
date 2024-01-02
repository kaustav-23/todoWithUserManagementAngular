import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataUpdateService } from '../../../services/user-data-update.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  showSuccessMessage = false;
  showAlreadyRegisteredMessage=false;

  user:any ;
  user_x:any;

  ngOnInit(): void {
   
    
  }
  constructor(private usersData:UserDataUpdateService){
  
  }
  
  storeData(value_signUp:any,signUp_form : NgForm){

          //start:check if already user present

          this.showAlreadyRegisteredMessage = false;
          this.usersData.userLogInGet().subscribe((res)=>{
            console.log(res);
            
             const user_x = res.find((a:any)=>{
              this.user = a.email_id === value_signUp.email_id && a.password === value_signUp.password;
             
            if(this.user){
             this.showAlreadyRegisteredMessage=true;
             signUp_form.reset();
             }
             
         });
         //stop:check if already user present


         if(!this.showAlreadyRegisteredMessage){
          this.showSuccessMessage = false;
            this.usersData.userPost(value_signUp).subscribe((result)=>{
             console.warn(result);
             this.showSuccessMessage = true;
             signUp_form.reset();
             setTimeout(()=>{  this.showSuccessMessage= false }, 4000)
             this.ngOnInit();
            });
        }


          });

        
          
          


       
  }

}
