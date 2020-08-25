import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ROUTE } from './core/ultils/systemconst';

const routes: Routes = [
  {
    path: ROUTE.ACCOUNT.MAIN,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', component: HomeComponent, children: [

      {
        path: ROUTE.MANAGEMENT.USER,
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: ROUTE.DASHBOARD.MAIN,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: '', pathMatch: 'full', redirectTo: ROUTE.MANAGEMENT.USER }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ROUTE.ACCOUNT.MAIN }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
