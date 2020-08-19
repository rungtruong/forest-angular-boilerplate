import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropDashboardComponent } from "./crop-dashboard.component";

import { CropDashboardRoutingModule } from './crop-dashboard-routing.module';
import { BreadcrumbModule } from '../../../shared/components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [CropDashboardComponent],
  imports: [
    CommonModule,
    CropDashboardRoutingModule,
    BreadcrumbModule
  ],
  exports:[CropDashboardComponent]
})
export class CropDashboardModule { }
