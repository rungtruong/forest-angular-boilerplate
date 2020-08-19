import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropDashboardComponent } from './crop-dashboard/crop-dashboard.component';
import { ROUTE } from '../../core/ultils/systemconst';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: ROUTE.DASHBOARD.CROP, component: CropDashboardComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

