import { environment } from '../../environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private isAuthenticated=false;
  private usuarioActual: any = null; 

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/user/login`;
    const response = await firstValueFrom(
      this.http.post<{user?:any, isLogin:string}>(
        url, { username, password })
    );

    if(response.isLogin) {
      this.isAuthenticated= true;
      this.usuarioActual=response.user;
      localStorage.setItem('rol',response.user.rol);
    }
    return response;
  }

  logout() {
    this.isAuthenticated = false;
    this.usuarioActual = null;
    localStorage.removeItem('rol');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  obtenerUsuario() {
    return this.usuarioActual;
  }

}
