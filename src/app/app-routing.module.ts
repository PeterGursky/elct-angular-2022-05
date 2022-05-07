import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtendedUsersComponent } from './extended-users/extended-users.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'extended-users', component: ExtendedUsersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: P404Component }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
