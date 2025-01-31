import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: 'login' , component: LoginComponent },
    {path: 'signup' , component: SignupComponent},
    {path: 'home' , component: HomeComponent},
    
];
