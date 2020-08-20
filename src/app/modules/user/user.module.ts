import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { UikitModule } from "../../shared/uikit/uikit.module";

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    BreadcrumbModule,
    UikitModule
  ]
})
export class UserModule { }
