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
                   {name: 'Hanka', email: 'hanka@hanka.sk', password: ''}]; 
  selectedUser: User | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
//    this.users = this.usersService.getLocalUsers();
      this.usersService.getLocalUsers2().subscribe(
        (u:User[]) => this.users = u);
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

}
