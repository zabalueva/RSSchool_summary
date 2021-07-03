import { Component } from '@angular/core';
import cards, { categories } from 'src/assets/cards';
import { ModeService } from 'src/app/services/modeService';
import { Router } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-sidenav',
  providers: [ModeService],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {
  listNav=categories;
  link='/card';
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  numberCategory: number=this.getNumberCategory();
  mode=false;

  constructor(private modeService: ModeService, private router: Router) {
    modeService.mode$.subscribe((mode) => this.mode=mode)
  }

  toggleMode() {
    this.mode=!this.mode;
    if (document.getElementById('button__start')) {
      (document.getElementById('button__start') as Element).classList.toggle('button__start_disabled');
    }
    console.log(`sidenav${this.mode}`)
  }

  toggleMenu() {
    if ((document.getElementById('hmt') as HTMLInputElement).checked) {
      (document.getElementById('hmt') as HTMLInputElement).checked=false;
    }
  }

  highlight(event: any) {
    let allItems=Array.from(document.getElementsByClassName('menu__item'));
    allItems.forEach(element => {
      element.classList.remove('menu__item-active');
    });
    (event.target as Element).classList.add('menu__item-active');
  }

  navigate(event: any): void {
    setTimeout(() => this.router.navigate(['/card']), 0)
  }

  getNumberCategory() {
    return this.numberCategory;
  }
}
