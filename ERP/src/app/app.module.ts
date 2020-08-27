import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TempCalculatorComponent,
    TodoListComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    UserRegisterComponent,
    UserListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
