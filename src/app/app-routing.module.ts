import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowParksComponent } from './show-parks/show-parks.component';
import { CanactivateGuard} from './guards/canactivate.guard';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', component: ShowParksComponent, pathMatch:'full'},
  { path: 'home', component: ShowParksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dash', canActivate: [CanactivateGuard], component: DashboardComponent},
  { path: 'info', component: AboutPageComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
