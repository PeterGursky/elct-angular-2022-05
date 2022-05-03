import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/entities/auth';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth = new Auth("Peter","upjs");
  errorMessage = '';

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get authJson(): string {
    return JSON.stringify(this.auth);
  }

  setName(event: any) {
    this.auth.name = event.target.value;
  }

  onSubmit(){
    this.usersService.login(this.auth).subscribe(
      success =>  {
        if (success) {
          this.router.navigateByUrl("/users");
        } else {
          this.errorMessage = "Bad login or password";
          setTimeout(() => this.errorMessage = '', 3000);
        }
      }
    );
  }

}
