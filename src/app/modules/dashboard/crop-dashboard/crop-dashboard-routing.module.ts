import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropDashboardComponent } from "./crop-dashboard.component";

const routes: Routes = [
  { path: '', component: CropDashboardComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropDashboardRoutingModule { }

