import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent {
  nombreProducto = '';
  descripcion = '';
  precio = 0;
  isOferta = false;
  porcentajeOferta = 0;
  imgurl = '';

  constructor(
    public readonly dialog: MatDialogRef<ProductDialogComponent>
  ) {}

  Cancelar() {
    this.dialog.close();
  }

  Agregar() {
    const newProduct = {
      nombreProducto: this.nombreProducto,
      descripcion: this.descripcion,
      precio: this.precio,
      isOferta: this.isOferta,
      porcentajeOferta: this.porcentajeOferta,
      imgurl: this.imgurl
    };
    this.dialog.close(newProduct);
  }

}
