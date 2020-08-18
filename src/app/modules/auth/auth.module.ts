import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';


@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, VerifyCodeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
