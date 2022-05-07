import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Group } from 'src/entities/group';
import { User } from 'src/entities/user';
import { UsersService } from 'src/services/users.service';

interface GroupPair {
  group: Group,
  isMember: boolean
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnChanges {
  @Output("userSubmit") user$ = new EventEmitter<User>();
  @Input() user: User | null | undefined;
  @Input() actionWithUser : 'add'| 'edit' = 'add';
  title: string = 'Pridanie používateľa';

  groups: GroupPair[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.user) {
      this.groups = [];
      this.usersService.getGroups().subscribe(groups => {
        groups.forEach(group => {
          if (this.user?.groups.some(userGroup => userGroup.id === group.id)) {
            this.groups.push({group, isMember: true});
          } else {
            this.groups.push({group, isMember: false});
          }
        });
      });
    }
    this.title = this.actionWithUser === 'add' 
                        ? 'Add new user'
                        : 'User editation';  
  }

  onSubmit() {  
    if (this.user) {
      this.user.groups = [];
      for (let g of this.groups) {
        if (g.isMember) {
          this.user.groups.push(g.group);
        }
      }
      this.user$.emit(this.user);
    }
  }
}
