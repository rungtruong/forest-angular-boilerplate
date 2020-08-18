import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const MODULE = [
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
];

@NgModule({
  declarations: [],
  imports: [
    MODULE
  ],
  exports: [
    MODULE
  ]
})
export class AntDesignModule { }
