import { Component, OnInit } from '@angular/core';
import {  AuthService  } from '../../services/auth.service';
import {User} from '../../../models/User';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  test: string;
  constructor(private auth: AuthService, private user: User, private router:Router) { this.test = this.auth.test(); }

  login()  {
      this.auth.login(this.user).subscribe(
        data => {
                  console.log(data.status);
                  console.log(data['status']);
                  localStorage.clear();
                  localStorage.setItem('token', data['token']);
                  console.log(' The logged in user is :'+data['username']);
                  console.log(data.status);

                        this.router.navigate(['/dashboard']);


                }
      );
  }
  ngOnInit() {
  }

}
