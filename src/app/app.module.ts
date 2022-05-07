import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ExtendedUsersComponent } from './extended-users/extended-users.component';
import { MessageComponent } from './message/message.component';
import { GroupsPipe } from '../pipes/groups.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    P404Component,
    NavbarComponent,
    ExtendedUsersComponent,
    UserEditComponent,
    MessageComponent,
    GroupsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
