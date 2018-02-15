import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {


  constructor(private user: User, private authService: AuthService , private router: Router) { }

  ngOnInit() {
  }

  register()  {

    console.log(this.user.email);
    this.authService.register(this.user).subscribe( data =>        { console.log( 'response is ' + data);

          console.log(data['message']);
          console.log(data['status']);
          this.router.navigate(['/login']);

    },

  error => {
    console.log(error.status+" "+error);
          });

  }

}
