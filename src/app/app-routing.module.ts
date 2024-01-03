import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { TodoDataComponent } from './components/todo-data/todo-data.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  
    {
      path: 'login',
      component:LoginComponent,
      
    }
    ,{
      path:'signUp',
      component:SignUpComponent
    }
    ,{
      path:'todo-data/:userId',
      component:TodoDataComponent,
      canActivate:[authGuardGuard]
  
    }
    ,{
      path:'user-list/:no',
      component:UserListComponent,
      canActivate:[authGuardGuard]
    },
    {
      path:'',
      component:LoginComponent
    }
    ,{
      path:'**',
      component:NotFoundComponent
    }
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
