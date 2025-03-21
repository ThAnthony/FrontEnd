import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowProductsComponent } from "../show-products/show-products.component";
import { ShowSalesComponent } from "../show-sales/show-sales.component";
import { AuthService } from '../services/auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [
    MatTabsModule,
    RouterModule,
    MatButton,
    ShowProductsComponent,
    ShowSalesComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) {}
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
