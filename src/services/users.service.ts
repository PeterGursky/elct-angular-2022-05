import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Auth } from 'src/entities/auth';
import { User } from 'src/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverUrl = "http://localhost:8080/";
  users: User[] = [new User("JanoService","jano@jano.sk", 1, new Date(),'qwerty'),
                   new User('FeroService','fero@fero.sk',undefined, undefined, undefined),
                   {name: 'HankaService', email: 'hanka@hanka.sk', password: ''}]; 
  token: string = '';

  constructor(private http: HttpClient) { }

  public getLocalUsers(): User[] {
    return this.users;
  }

  public getLocalUsers2(): Observable<User[]> {
    return of(this.users);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serverUrl + "users").pipe(
      // map(jsonUsers => {
      //   const result: User[] = [];
      //   for (let jsonUser of jsonUsers) {
      //     result.push(User.clone(jsonUser))
      //   }
      //   return result;
      // })
      map(jsonUsers => jsonUsers.map(u => User.clone(u)))
    );
  }

  public login(auth: Auth):Observable<boolean> {
    return this.http.post(this.serverUrl + 'login', auth, { responseType: 'text' }).pipe(
      map(token => {
        this.token = token;
        return true;
      }),
      catchError(error => {
        return of(false);
      })
    );
  }
}
