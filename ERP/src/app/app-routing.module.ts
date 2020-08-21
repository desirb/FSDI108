import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'temperature', component: TempCalculatorComponent},
  {path: 'todo', component: TodoListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'list', component: UserListComponent},
  {path: 'login', component: UserLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
