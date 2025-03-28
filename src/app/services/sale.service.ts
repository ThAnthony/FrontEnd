import { environment } from '../../environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = environment.apiUrl;

  constructor(
    private readonly http:HttpClient,
    private readonly authService: AuthService
  ) { }

  async AgregarVenta(newVenta:object): Promise<any[]> {
    const url = `${this.apiUrl}/sales`;
    
    const response = await firstValueFrom(
      this.http.post<any[]>(url,newVenta)
    );
    return response;
  }

  async listVentas(): Promise<any[]> {
    const userRol = localStorage.getItem('rol');

    if (userRol === 'administrador') {
      var url = `${this.apiUrl}/sales`;
    }else {
      const User = this.authService.obtenerUsuario();
      var url = `${this.apiUrl}/sales/${User.idUsuario}`;
    }

    const response = await firstValueFrom(
      this.http.get<any[]>(url)
    );
    return response;
  }
}
