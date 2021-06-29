import { Component } from '@angular/core';
import cards, { categories } from 'src/assets/cards';
import { NodeService } from 'src/app/services/nodeService';

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

  constructor(private nodeService: NodeService) {
    nodeService.node$.subscribe(number => number = this.numberCategory);
    console.log(`sss ${this.numberCategory}`)
  }

  checked=false;

  toggleMode() {
    this.checked=!this.checked;
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

  saveNumber(event: any):number {
    const numberGh = this.numberCategory;
    this.numberCategory=categories.findIndex((item) => item === event.target.text);
    this.nodeService.addNode(numberGh);
    return this.numberCategory;
  }

  getNumberCategory(){
    return this.numberCategory;
  }
}

