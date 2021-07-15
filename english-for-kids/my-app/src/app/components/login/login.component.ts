import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, public router: Router) {
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = 'admin';
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  public stopSubmit=false;

  clearForm(): void {
    const loginInput=document.querySelector('.form__input_login') as HTMLInputElement;
    const passwordInput=document.querySelector('.form__input_password') as HTMLInputElement;
    loginInput.value='';
    passwordInput.value='';
  }

  checkLogin() {
    const loginInput = document.querySelector('.form__input_login') as HTMLInputElement;
    const passwordInput = document.querySelector('.form__input_password') as HTMLInputElement;
    if (loginInput.value==='admin' && passwordInput.value==='admin') {
      this.login();
    } else {
      passwordInput.insertAdjacentHTML('afterend', `<p class="error-message">Incorrect credentials</p>`);
    }
  }
}
