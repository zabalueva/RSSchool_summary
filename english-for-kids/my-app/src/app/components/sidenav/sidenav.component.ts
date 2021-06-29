import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent {
  listNav=categories;
  link='/card';

  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

  }
numberCategory:number = 0;
  public iconClose='&times';
  checked=false;
  disabled=false;
  main=true;


  toggleMode() {
    this.checked=!this.checked;
  }

  toggleMenu() {
    if ((document.getElementById('hmt') as HTMLInputElement).checked) {
      (document.getElementById('hmt') as HTMLInputElement).checked=false;
    }
  }

  highlight(event:any){
    let allItems = Array.from(document.getElementsByClassName('menu__item'));
    allItems.forEach(element => {element.classList.remove('menu__item-active');
    });
    (event.target as Element).classList.add('menu__item-active');
  }

  saveNumber(event:any){
    this.numberCategory = categories.findIndex((item) => item === event.target.text)
  }
}
