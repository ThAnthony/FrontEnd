import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Product {
  idProducto?: number;
  nombreProducto: string;
  descripcion: string;
  precio: number;
  isOferta: boolean;
  porcentajeOferta: number;
  imgurl: string;
}

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
  idProducto?: number;
  nombreProducto: string = '';
  descripcion: string = '';
  precio: number = 0;
  isOferta: boolean = false;
  porcentajeOferta: number = 0;
  imgurl: string = '';

  constructor(
    public readonly dialog: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any
  ) {
    if(data) {
      this.idProducto =data.idProducto;
      this.nombreProducto = data.nombreProducto;
      this.descripcion = data.descripcion;
      this.precio = data.precio;
      this.isOferta = data.isOferta;
      this.porcentajeOferta = data.porcentajeOferta*100;
      this.imgurl = data.imgurl;
    }
  }

  Cancelar() {
    this.dialog.close();
  }

  Guardar() {
    const Product:Product = {
      idProducto:this.idProducto,
      nombreProducto: this.nombreProducto,
      descripcion: this.descripcion,
      precio: this.precio,
      isOferta: this.isOferta,
      porcentajeOferta: this.porcentajeOferta/100,
      imgurl: this.imgurl
    };
    this.dialog.close(Product);
  }
}
