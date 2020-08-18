import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CropDashboardComponent } from './crop-dashboard/crop-dashboard.component';
import { ShareComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [CropDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareComponentsModule,
  ]
})
export class DashboardModule { }
