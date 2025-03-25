import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { CarritoComponent } from './carrito/carrito/carrito.component';

export const routes: Routes = [
    {path:'main',component:MainComponent,canActivate:[AuthGuard]},
    {path:'carrito',component:CarritoComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
