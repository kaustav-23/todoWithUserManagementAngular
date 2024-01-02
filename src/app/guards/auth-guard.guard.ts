import { inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuardGuard: CanActivateFn = (route, state) => {

  // ---------------decativated auth guard --------------/ 
  const token = localStorage.getItem('token');
  const _router = inject(Router);
  if(token){
    return true;
  }
  else{
    
    _router.navigate(['login']);
    return false;
  }


  // return true;
  
};
