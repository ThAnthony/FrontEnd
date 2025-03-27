import { Component, isDevMode, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowProductsComponent } from "../show-products/show-products.component";
import { ShowSalesComponent } from "../show-sales/show-sales.component";
import { AuthService } from '../services/auth.service';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [
    MatTabsModule,
    RouterModule,
    MatButton,
    MatIconModule,
    ShowProductsComponent,
    ShowSalesComponent,
    CommonModule
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isAdmin = false;
  user: string= '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) {}

  ngOnInit(): void {
    this.CheckRole(); 
    this.user = this.authService.obtenerUsuario().nombrePersona;
  }
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  CheckRole() {
    const userRol = localStorage.getItem('rol');
    this.isAdmin = userRol === 'administrador';
  }

}
