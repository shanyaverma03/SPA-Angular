import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/module1/login/login.component';
import { DashboardComponent } from 'src/app/module2/dashboard/dashboard.component';
import { SearchComponent } from 'src/app/module1/search/search.component';
import { AuthenticationGuard } from './authentication.guard';
import { LogoutComponent } from 'src/app/module1/logout/logout.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
