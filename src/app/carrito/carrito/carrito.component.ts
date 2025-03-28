import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { SaleService } from '../../services/sale.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carrito:any[] =[];

  constructor(
    private readonly carritoService: CarritoService,
    private readonly VentaService: SaleService,
    private readonly authService: AuthService,
    private readonly router:Router
  ) {}

  ngOnInit() {
    this.carrito =this.carritoService.listCarrito();
  }

  removeProducto(producto:any) {
    this.carritoService.quitarProducto(producto);
  }

  calcularTotal() :number {
    return this.carrito.reduce((total,producto) =>total +producto.precioFinal,0);
  }

  async registrarVenta() {
    const usuario = this.authService.obtenerUsuario();

    const nuevasVentas = this.carrito.map(producto => ({
      montoFinal: producto.precioFinal, 
      Producto: producto, 
      Usuario: usuario, 
    }));

    await this.VentaService.AgregarVenta(nuevasVentas);

    this.carritoService.limpiarLista();
    this.router.navigate(['/main']);
  }
}
