import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from 'src/app/core/ultils/systemconst';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: ROUTE.ACCOUNT.LOGIN, component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: ROUTE.ACCOUNT.LOGIN }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
