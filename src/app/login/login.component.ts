import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";
  user!: User;
  verified: boolean = false;

 constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    if (this.username == "") {
      this.errorMessage = "Please enter a username."
    } else if (this.password == "") {
      this.errorMessage = "Please enter a password."
    } else {  
      this.user = new User(this.username, this.password); 
      this.authService.addUser(this.user).subscribe({
        next:(user: any)=>{
          if (user == null){
            this.errorMessage = "Username is already taken, try a different username.";
          }
          else {
            this.errorMessage = "Account successfully created"; 
          }
        },
        error: (errorResponse: any)=>{
          console.log(errorResponse);
          this.errorMessage = errorResponse.error;
        }
      });
    }
  }

  login(){
    console.log("login clicked");
    if (this.username == "") {
      this.errorMessage = "Please enter a username."
    } else if (this.password == "") {
      this.errorMessage = "Please enter a password."
    } else {  
      this.user = new User(this.username, this.password); 
    }
    this.authService.verifyUser(this.user).subscribe({
      next:(user: any)=>{
        if (user == null){
          this.errorMessage = "User does not exist - check your username or create an account.";
        }
        else {
          if (this.user.password == user.password){
            this.errorMessage = "login successful";
            this.authService.persistLogin(user.username);
          } else {
            this.errorMessage = "Unable to login - wrong password";
          }
        }
      },
      error: (errorResponse: any)=>{
        console.log(errorResponse);
      }
    });
  
  }
 
}

