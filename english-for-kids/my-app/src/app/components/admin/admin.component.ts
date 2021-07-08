import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

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

}
