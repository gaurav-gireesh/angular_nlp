import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';


@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:8002/auth';

  private service_url = 'http://localhost:5000';

  private headers: HttpHeaders =
    new HttpHeaders({'Content-Type': 'application/json' });


  constructor(private client: HttpClient) {

}

  test(): string  {
    return 'This auth servce works';
  }
  login(user: User): Observable<any> {
    const url = `${this.service_url}/login`;

    const new_header = this.headers.append('Authorization' , 'Basic ' + btoa(user.username + ':' + user.password));


    return this.client.get(url,  {headers: new_header});
  }
  register(user: User): Observable<any> {

    const url = `${this.service_url}/user`;


      //const new_headers  = this.headers.append('x-access-token', localStorage.getItem('token'));
      return this.client.post(url, user, {headers: this.headers});


  }
}
