import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SaleService } from '../services/sale.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sales',
  standalone:true,
  imports: [
    CommonModule
  ],
  templateUrl: './show-sales.component.html',
  styleUrl: './show-sales.component.css'
})
export class ShowSalesComponent implements OnInit {
  ventas: any[] = [];
  isAdmin = false;

  constructor(
    private readonly ventaService:SaleService,
    private readonly authService:AuthService
  ) {}

  async ngOnInit() {
    this.ventas = await this.ventaService.listVentas();
    this.CheckRole();
  }

  CheckRole() {
    const userRol = localStorage.getItem('rol');
    this.isAdmin = userRol === 'administrador';
  }
}
