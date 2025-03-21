import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowProductsComponent } from "../show-products/show-products.component";
import { ShowSalesComponent } from "../show-sales/show-sales.component";

@Component({
  selector: 'app-main',
  imports: [
    MatTabsModule,
    RouterModule,
    ShowProductsComponent,
    ShowSalesComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router) {}

  onLogout() {
    console.log('Logout');
    this.router.navigate(['/login'])
  }
}
