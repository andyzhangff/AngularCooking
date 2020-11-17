import { RouteHallComponent } from './route-hall/route-hall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateReceipeComponent } from './create-receipe/create-receipe.component';
import { RouteguardGuard } from './myservice/guard/routeguard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'route-hall', component: RouteHallComponent, },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'create-receipe', component: CreateReceipeComponent },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'users-list', component: UsersListComponent }
];
// , canActivate:[RouteguardGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
