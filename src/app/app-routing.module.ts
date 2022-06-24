import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './core/routeguard/route-guard.service';
import { DashboardComponent } from './feature/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './feature/home/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: 'dashboard', component: DashboardComponent
},
{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
