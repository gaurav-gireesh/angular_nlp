import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CheckLoggedInService } from './services/check-logged-in.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  constructor(private authService:CheckLoggedInService,private router:Router){

   this.loggedIn=this.authService.getLoggedIn();
  }

  logout()  {
    localStorage.clear();
    this.router.navigate(['login']);

  }
}
