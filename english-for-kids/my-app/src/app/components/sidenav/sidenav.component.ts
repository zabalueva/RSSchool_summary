import { Component } from '@angular/core';
import cards, { categories } from 'src/assets/cards';
import { ModeService } from 'src/app/services/modeService';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/playService';

@Component({
  selector: 'app-sidenav',
  providers: [ModeService, PlayService],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {
  listNav=categories;
  link='/card';
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  numberCategory: number=this.getNumberCategory();
  mode=false;

  constructor(private modeService: ModeService, private router: Router, private playService: PlayService) {
    modeService.mode$.subscribe((mode) => this.mode=mode)
  }

  toggleMode() {
    if (!this.mode) {
      this.modeService.toggleMode(true);
      if (document.getElementById('button__start')) {
        if (document.getElementsByClassName('category__title')) {
          (document.getElementById('button__start') as Element).classList.remove('button__start_disabled');
        }
      }
      if (document.getElementsByClassName('card__action')) {
        Array.from(document.getElementsByClassName('card__action')).forEach((el) => (el as HTMLElement).style.display='none')
      }
      if (document.getElementsByClassName('card__title-container')) {
        Array.from(document.getElementsByClassName('card__title-container')).forEach((el) => (el as HTMLElement).style.backgroundColor='#34a7c1')
      }
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.height='308px');
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.width='325px')
    } else {
      this.modeService.toggleMode(false);
      if (document.getElementById('button__start')) {
        (document.getElementById('button__start') as Element).innerHTML = `START`;
        (document.getElementById('button__start') as Element).classList.add('button__start_disabled');
      }
      if (document.getElementsByClassName('card__action')) {
        Array.from(document.getElementsByClassName('card__action')).forEach((el) => (el as HTMLElement).style.display='inline')
      }
      if (document.getElementsByClassName('card__title-container')) {
        Array.from(document.getElementsByClassName('card__title-container')).forEach((el) => (el as HTMLElement).style.backgroundColor='#ffffff')
      }
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.height='268px');
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.width='318px')
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
    setTimeout(() => this.router.navigate(['/card']), 0)
  }

  getNumberCategory() {
    return this.numberCategory;
  }

  getRandom() {
    const title=document.getElementsByClassName('category__title')[0];
    const titleText=title.textContent||'';
    console.log(titleText)
    this.playService.getRandomSound(categories.indexOf(titleText));

    (document.getElementById('button__start') as Element).innerHTML = `&#8635`;
  }
}