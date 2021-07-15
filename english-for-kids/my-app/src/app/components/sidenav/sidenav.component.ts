import { Component } from '@angular/core';
import cards, { categories } from 'src/assets/cards';
import { ModeService } from 'src/app/services/modeService';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/playService';
import { GameStateService } from 'src/app/services/gameStateService';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  providers: [ModeService, PlayService, GameStateService],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {
  listNav=categories;
  link='/card';
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  numberCategory: number=this.getNumberCategory();
  mode=false;
  game = false;

  constructor(
    private modeService: ModeService,
    private router: Router,
    private playService: PlayService,
    public gameStateService: GameStateService,
    public authService: AuthService) {
    modeService.mode$.subscribe((mode) => this.mode=mode);
    gameStateService.game$.subscribe((game) => this.game=game);
  }

  toggleMode() {
    if (!this.mode) {
      this.modeService.toggleMode(true);
      if (document.getElementById('button__start')) {
        if (document.getElementsByClassName('category-title')) {
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
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.width='325px');
    } else {
      this.modeService.toggleMode(false);
      this.playService.resetPoints();
      Array.from(document.querySelectorAll('.card__img')).forEach(
        (el) => (el as Element).classList.remove('card_inactive'));
      Array.from(document.getElementsByClassName('star-win')).forEach(
        (el) => (el as Element).innerHTML = '');
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
      Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.width='328px')
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
    this.gameStateService.toggleMode(true);
    const title=document.getElementsByClassName('category-title')[0];
    const titleText=title.textContent||'';
    if (this.playService.checkingWord === ''){
      this.playService.getRandomSound(categories.indexOf(titleText));
      (document.getElementById('button__start') as Element).innerHTML = `&#8635`;
    } else {
      this.playService.repeatRandomSound(categories.indexOf(titleText));
    }
  }
}