import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
  }
  
  logout() {
    if(this.authService.isAuthenticated()) {
      this.authService.logout();
      this.router.navigate(['login']);
      this.loggedIn = false;
    } else {
      alert("can't log out, because you are not logged in")
    }
  }
}