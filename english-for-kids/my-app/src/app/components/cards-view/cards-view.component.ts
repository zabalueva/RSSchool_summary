import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ModeService } from 'src/app/services/modeService';
import cards, { categories } from 'src/assets/cards';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/playService';
import { GameStateService } from 'src/app/services/gameStateService';
import { StatisticsService } from 'src/app/services/statisticsService';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
  number: number=0;
  POINTFORWINS: number=8;
  title: string|null="animal";
  fillerNav=Array.from({ length: 8 }, (_, i) => `${categories[i]}`);
  flipped=false;
  mode=false;
  game=false;
  public fillerCategory: Card[]|null|undefined=[];
  checkingWord: string='';
  starSpan: Element=document.createElement('span');

  constructor(
    private modeService: ModeService,
    private router: Router,
    public playService: PlayService,
    public gameStateService: GameStateService,
    public statisticsService: StatisticsService
    ) {
    modeService.mode$.subscribe((mode) => this.mode=mode);
    gameStateService.game$.subscribe((game) => this.game=game);
    //by @fomenkogregory
    this.number=this.router.getCurrentNavigation()?.extras.state?.categoryIndex??1;
  }

  getTitle(): void {
    if (document.getElementsByClassName('menu__item-active')[0].textContent) {
      if (document.getElementsByClassName('menu__item-active')[0].textContent==='Main Page') {
        this.title=categories[this.number];
      } else {
        this.title=document.getElementsByClassName('menu__item-active')[0].textContent;
      }
    }
  }

  ngOnInit() {
    if (this.mode) {
      if (document.getElementsByClassName('card__action')) {
        setTimeout(() => Array.from(document.getElementsByClassName('card__action')).forEach((el) => (el as HTMLElement).style.display='none'), 1000);
        setTimeout(() => Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.height='308px'), 1000);
        setTimeout(() => Array.from(document.getElementsByClassName('card__img')).forEach((el) => (el as HTMLElement).style.width='325px'), 1000);
      }
    }
    if (!this.mode){
    Array.from(document.querySelectorAll('.card__img')).forEach(
      (el) => (el as Element).classList.remove('card_inactive'))
    }
    this.getTitle();
    if (document.getElementsByClassName('menu__item-active')[0].textContent!=='Main Page') {
      if (typeof (this.title)==='string') {
        this.number=categories.indexOf(this.title);
      }
    }
    if (document.getElementById('button__start')) {
      (document.getElementById('button__start') as Element).innerHTML=`START`;
    }
    this.fillerCategory=cards[this.number];
  }

  playAudio(src: string) {
    let audio=new Audio();
    audio.src=src;
    audio.load();
    audio.play();
  }

  soundOn(card: Card) {
    this.starSpan=document.createElement('span');
    this.starSpan.classList.add('star-win');
    if (!this.mode) {
      this.playAudio(card.audioSrc);
      this.statisticsService.incrementTrainClicks(card.word);
    } else {
      if (this.game) {
        let inactive: any[]=[];
        Array.from(document.querySelectorAll('.card__img')).forEach(
          (el) => (el as Element).classList.contains('card_inactive')? inactive.push(
            (el as HTMLImageElement).src):false);
        if (!inactive.join().includes(card.word)) {
          this.getResult(card.word)
        }
      }
    }
  }

  getResult(word: string) {
    if (this.playService.checkingWord === word) {
      this.statisticsService.incrementCorrectClicks(word);
      document.querySelector('.category__title')?.appendChild(this.starSpan);
      this.starSpan.innerHTML=`<img src='/assets/img/star-win.svg'>`;
      this.playAudio('/assets/audio/correct.mp3');
      this.playService.incrementPoints();
      if (this.playService.getPoints()===this.POINTFORWINS) {
        if (this.playService.getErrors()) {
          this.playAudio('/assets/audio/failure.mp3');
          document.querySelector('.non-congratulations')?.classList.remove('hidden');
          document.querySelector('.cards-container')?.classList.add('hidden');
        } else {
          this.playAudio('/assets/audio/success.mp3');
          document.querySelector('.congratulations')?.classList.remove('hidden');
          document.querySelector('.cards-container')?.classList.add('hidden');
        }
        this.playService.resetPoints();
        setTimeout(() => this.router.navigate(['/']), 4000);
        this.playService.checkingWord = '';
        this.gameStateService.toggleMode(false);
      } else {
        const title=document.getElementsByClassName('category-title')[0];
        const titleText=title.textContent||'';
        setTimeout(() => this.playService.getRandomSound(categories.indexOf(titleText)), 1000);
      }
    } else {
      this.statisticsService.incrementInCorrectClicks(word);
      this.playService.incrementErrors();
      document.querySelector('.category__title')?.appendChild(this.starSpan);
      this.starSpan.innerHTML=`<img src='/assets/img/star.svg'>`;
      //sound from @marta-r
      this.playAudio('/assets/audio/error.mp3')
    }
  }


  inactiveCard(img: any, card: Card) {
    if (this.mode) {
      if (this.playService.checkingWord===card.word) {
        (img.srcElement as Element).classList.add('card_inactive')
      }
    }
  }

  turnCardAutomatic(event: any) {
    ((event.srcElement as Node).parentNode as Element).classList.remove("animate");
  }

  rotate(event: any) {
    ((event.srcElement as Node).parentNode?.parentNode?.parentNode as Element).classList.add("animate");
    this.flipped=!this.flipped;
  }

  ngOnDestroy() {
    this.playService.checkingWord = '';
    this.gameStateService.toggleMode(false);
  }

}
