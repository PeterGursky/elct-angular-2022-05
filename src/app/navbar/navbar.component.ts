import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string = '';
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.usersService.loggedUser().subscribe(userName => this.userName = userName);
  }

  logout() {
    this.usersService.logout();
    this.router.navigateByUrl("/login");
  }
}
