import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    name: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    email: '',
    password: ''
  };
  constructor(private appService: AppService, private router: Router) {

  }
  ngOnInit() {

  }
  signUp(data: any) {
    console.warn(this.signupObj)
  }

  logIn(data: any) {
    this.appService.login(this.loginObj.email, this.loginObj.password).then(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate([''], { queryParams: { loggedIn: 'Yes' } })
      } else {
        alert('Username or Password incorrect/user doesnot exist')
      }
    })

  }

}
