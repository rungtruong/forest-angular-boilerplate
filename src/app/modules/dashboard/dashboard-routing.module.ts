import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropDashboardComponent } from './crop-dashboard/crop-dashboard.component';

const routes: Routes = [
  { path: '', component: CropDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
