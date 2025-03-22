import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDialogComponent } from './dialog/product-dialog/product-dialog.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent implements OnInit {
  products:any[] =[];

  constructor(
    private readonly productService:ProductService,
    public readonly dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.products = await this.productService.ListProducts();
  }

  async AgregarProduct() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      maxHeight:'90vh',
      autoFocus:false
    });

    const newProduct= await firstValueFrom(dialogRef.afterClosed());
    
    if (newProduct) {
      console.log(newProduct);
      const rpta = await this.productService.AgregarProduct(newProduct);
      console.log(rpta);
      this.ngOnInit();
    }
  }

}
