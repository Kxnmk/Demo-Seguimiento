import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
