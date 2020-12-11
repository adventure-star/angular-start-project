import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "contactus", component: ContactusComponent},
  { path: "new", component: NewComponentComponent},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
