import { Component, OnInit } from '@angular/core';
import { User } from 'src/entities/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-extended-users',
  templateUrl: './extended-users.component.html',
  styleUrls: ['./extended-users.component.css']
})
export class ExtendedUsersComponent implements OnInit {
  userToEdit: User = new User('','');
  users: User[] = [];
  actionWithUser : 'add'|'edit' = 'add';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.updateUsers();
  }

  updateUsers() {
    this.usersService.getExtendedUsers().subscribe(
      users => this.users = users
    );
  }

  saveUser(user:User) {
    this.usersService.saveUser(user).subscribe(savedUser => {
      if (this.actionWithUser == 'add') {
        this.users.push(savedUser);
      } else {
        const index = this.users.findIndex(u => u.id === savedUser.id);
        this.users[index] = savedUser;
      }
    });
  }

  startAdd() {
    this.userToEdit = new User('','');
    this.actionWithUser = 'add';
  }

  startEdit(user:User) {
    this.userToEdit = User.clone(user);
    this.actionWithUser = 'edit';
  }

  deleteUser(user:User) {
    if (user.id && confirm("Do you really want to delete user " + user.name + " ?")) {
      this.usersService.deleteUser(user.id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== user.id);
      });
    } 
  }
}
