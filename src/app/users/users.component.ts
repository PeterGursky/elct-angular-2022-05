import { Component, OnInit } from '@angular/core';
import { User } from 'src/entities/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title:string = 'Users table';
  users: User[] = [new User("Jano","jano@jano.sk", 1, new Date(),'qwerty'),
                   new User('Fero','fero@fero.sk',undefined, undefined, undefined),
                  ]; 
  selectedUser: User | undefined;
  errorMessage = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
//    this.users = this.usersService.getLocalUsers();
    // this.usersService.getUsers().subscribe(
    //   (u:User[]) => this.users = u,
    //   _error => this.errorMessage = "Error in communication with server");
    this.usersService.getUsers().subscribe({
      next: (u:User[]) => this.users = u,
      error: _error => this.errorMessage = "Error in communication with server",
      complete: () => ''
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

}
