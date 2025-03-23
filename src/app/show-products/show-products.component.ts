import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDialogComponent } from './dialog/product-dialog/product-dialog.component';
import { firstValueFrom } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent implements OnInit {
  products:any[] =[];
  isAdmin : boolean = false;

  constructor(
    private readonly productService:ProductService,
    public readonly dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.products = await this.productService.ListProducts();
    this.CheckRole();
  }

  CheckRole() {
    const userRol = localStorage.getItem('rol');
    this.isAdmin = userRol === 'administrador';
    console.log('Rol revisado:',this.isAdmin);
  }

  ComprarProduct(product:any) {
    
  }

  async AgregarProduct() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      maxHeight:'90vh',
      autoFocus:false
    });

    const newProduct= await firstValueFrom(dialogRef.afterClosed());
    
    if (newProduct) {
      const rpta = await this.productService.AgregarProduct(newProduct);
      console.log(rpta);
      this.ngOnInit();
    }
  }

  async EditarProduct(product:any) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      maxHeight:'90vh',
      autoFocus:false,
      data:product
    });

    const updateProduct = await firstValueFrom(dialogRef.afterClosed());

    if (updateProduct) {
      const rpta = await this.productService.ActualizarProduct(
        updateProduct.idProducto, updateProduct);
      this.ngOnInit();
    }
  }

    async BorrarProduct(idProduct:number) {
      await this.productService.BorrarProduct(idProduct)
      this.ngOnInit();
    }

}
