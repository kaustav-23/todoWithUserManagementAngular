import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const _router = inject(Router);
  if(token){
    return false;
  }
  else{
    return true;
  }
};
