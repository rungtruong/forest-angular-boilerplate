import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ROUTE } from './core/ultils/systemconst';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: ROUTE.DASHBOARD.MAIN,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: '', redirectTo: ROUTE.DASHBOARD.MAIN, pathMatch: 'full' },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
