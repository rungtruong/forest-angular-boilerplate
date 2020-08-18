import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AntDesignModule } from "../ant-design/ant-design.module";

@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule

  ],
  exports: [
    SidebarComponent,
    BreadcrumbComponent,
  ],
})
export class ShareComponentsModule { }
