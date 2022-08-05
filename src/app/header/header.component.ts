import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  clickHome(){
    this.router.navigate(['home']);
  }

  clickLogin(){
    this.router.navigate(['login'])
  }

  clickDash(){
    this.router.navigate(['dash'])
  }

  clickInfo(){
    this.router.navigate(['info'])
  }
  ngOnInit(): void {
  }

}
