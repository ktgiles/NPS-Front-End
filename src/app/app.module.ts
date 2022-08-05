import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowParksComponent } from './show-parks/show-parks.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenu, MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CanactivateGuard } from './guards/canactivate.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [

  // {path:'dashboard', component:DashboardComponent, canActivate: [CanactivateGuard]},
  // {path:'login', component:LoginComponent},
  // {path:'home', component:AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowParksComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    AboutPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
