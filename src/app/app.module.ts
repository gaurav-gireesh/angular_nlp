import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule  } from '@angular/router';
import {  AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule  } from '@angular/forms';
import { User } from '../models/User';
import {AppRoutingModule } from './app.-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-inerceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CheckLoggedInService} from './services/check-logged-in.service';
import {AuthGuard} from './guards/auth.guard';
import { FrenchComponent } from './components/french/french.component';
import { SoundexComponent } from './components/soundex/soundex.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations:
  [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FrenchComponent,
    SoundexComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
                AuthService,
                User,
                {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AuthInterceptor,
                  multi: true
                },
                CheckLoggedInService,
                AuthGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
