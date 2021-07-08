import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public stopSubmit=false;

  clearForm(): void {
    const loginInput=document.querySelector('.form__input_login') as HTMLInputElement;
    const passwordInput=document.querySelector('.form__input_password') as HTMLInputElement;
    loginInput.value='';
    passwordInput.value='';
  }

  checkLogin() {
    const loginInput=document.querySelector('.form__input_login') as HTMLInputElement;
    const passwordInput=document.querySelector('.form__input_password') as HTMLInputElement;
    if (loginInput.value==='admin'&&passwordInput.value==='admin') {
      this.router.navigate(['/admin']);
    } else {
      passwordInput.insertAdjacentHTML('afterend', `<p class="error-message">Введены неверные данные</p>`);
    }
  }
}
