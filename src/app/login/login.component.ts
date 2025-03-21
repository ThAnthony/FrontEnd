import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    console.log("onSubmit");
    const response = await this.authService.login(this.username, this.password);
    if (response.isLogin) {
      console.log("logueado");
      this.router.navigate(['/main']);
    }
    else {
      console.log("No logueado");
      this.errorMessage = 'Invalid username or password';
    }

    if (response.user) {
    console.log("role:",response.user.rol);  
    }
  }
}
