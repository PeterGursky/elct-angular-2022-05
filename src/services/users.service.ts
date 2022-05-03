import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [new User("JanoService","jano@jano.sk", 1, new Date(),'qwerty'),
                   new User('FeroService','fero@fero.sk',undefined, undefined, undefined),
                   {name: 'HankaService', email: 'hanka@hanka.sk', password: ''}]; 


  constructor() { }

  public getLocalUsers(): User[] {
    return this.users;
  }

  public getLocalUsers2(): Observable<User[]> {
    return of(this.users);
  }
}
