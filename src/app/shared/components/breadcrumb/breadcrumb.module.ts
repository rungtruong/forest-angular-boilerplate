import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { AntDesignModule } from '../../ant-design/ant-design.module';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    AntDesignModule
  ],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule { }
