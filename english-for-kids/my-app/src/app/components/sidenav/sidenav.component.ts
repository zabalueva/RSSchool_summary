import { Component } from '@angular/core';
import cards, { categories } from 'src/assets/cards';
import { NodeService } from 'src/app/services/nodeService';
import { Router } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-sidenav',
  providers: [NodeService],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {
  listNav=categories;
  link='/card';
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  numberCategory: number=this.getNumberCategory();

  constructor(private nodeService: NodeService, private router: Router) {

  }

  checked = true;

  toggleMode() {
    this.checked=!this.checked;
    if (document.getElementById('button__start')){
    (document.getElementById('button__start') as Element).classList.toggle('button__start_disabled');
    }
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
    setTimeout(()=> this.router.navigate(['/card']), 0)
  }

  getNumberCategory() {
    return this.numberCategory;
  }
}
