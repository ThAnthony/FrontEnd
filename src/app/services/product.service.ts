import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(
    private readonly http:HttpClient
  ) { }

  async ListProducts(): Promise<any[]> {
    const url = `${this.apiUrl}/products`;
    const response = await firstValueFrom(
      this.http.get<any[]>(url)
    );
    console.log(response);
    return response;
  }

  async AgregarProduct(newProduct:object): Promise<any> {
    const url = `${this.apiUrl}/products`;
    const response = await firstValueFrom(
      this.http.post<any>(url,newProduct)
    );
    return response;
  }
}
