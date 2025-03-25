import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: any[] = [];

  listCarrito() {
    return this.carrito;
  }

  agregarProducto(product: any) {
    this.carrito.push(product);
  }

  quitarProducto(product:any) {
    const index =this.carrito.indexOf(product);
    if (index > -1) {
        this.carrito.splice(index, 1);
      }
  }

  limpiarLista() {
    this.carrito= [];
  }
}