import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CropDashboardComponent } from './crop-dashboard/crop-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
