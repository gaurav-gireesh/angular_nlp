import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckLoggedInService {

  isLoggedIn: boolean;
  constructor() { }
  getLoggedIn():  boolean {

    const token = localStorage.getItem('token');
    if(token == null) return false;
    return true;


}
}
