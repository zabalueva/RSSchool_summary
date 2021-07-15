import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    if (document.querySelector('.logout')){
      document.querySelector('.login')?.classList.add('hidden');
      document.querySelector('.toggle_button')?.classList.add('hidden')
    }
  }

  ngOnDestroy(): void {
    if (document.querySelector('.logout')){
      document.querySelector('.login')?.classList.remove('hidden');
      document.querySelector('.toggle-button')?.classList.remove('hidden')
    }
  }

  logout(){
    this.authService.logout();
  }

}
