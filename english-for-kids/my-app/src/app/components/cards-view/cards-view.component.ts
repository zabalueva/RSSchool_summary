import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ModeService } from 'src/app/services/modeService';
import cards, { categories } from 'src/assets/cards';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/playService';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
  number:number = 6;

  title: string | null = "animal";
  fillerNav = Array.from({ length: 8 }, (_, i) => `${categories[i]}`);
  flipped = false;
  mode = false;
  public fillerCategory: Card[]|null|undefined=[];
  numberCategory: number = 0;
  checkingWord:string = '';

  constructor(private modeService:ModeService, private router: Router, private playService:PlayService,) {
    modeService.mode$.subscribe((mode) => this.mode = mode);
    //by @fomenkogregory
    this.number = this.router.getCurrentNavigation()?.extras.state?.categoryIndex ?? 1;
}

  getTitle():void {
    if (document.getElementsByClassName('menu__item-active')[0].textContent) {
      if (document.getElementsByClassName('menu__item-active')[0].textContent === 'Main Page') {
        this.title = categories[this.number];
      } else {
      this.title = document.getElementsByClassName('menu__item-active')[0].textContent;
      }
    }
  }

  ngOnInit() {
    console.log(this.mode);
    this.getTitle();
    if (document.getElementsByClassName('menu__item-active')[0].textContent !== 'Main Page'){
      if(typeof(this.title) === 'string'){
            this.number = categories.indexOf(this.title);
      }
    }
    if (document.getElementById('button__start')) {
      (document.getElementById('button__start') as Element).innerHTML = `START`;
    }
    this.fillerCategory = cards[this.number];
    if (this.mode) {
      console.log('dfkj')
      if (document.getElementsByClassName('card__action')) {
        Array.from(document.getElementsByClassName('card__action')).forEach((el) => (el as HTMLElement).style.display='none')
      }
    }
  }

  soundOn(card: Card) {
    const starSpan = document.createElement('span');
      starSpan.classList.add('star-win');
    if (!this.mode){
      let audio=new Audio();
      audio.src=card.audioSrc;
      audio.load();
      audio.play();
    } else {
    if (this.playService.checkingWord === card.word){
      document.querySelector('.category__title')?.appendChild(starSpan);
      starSpan.innerHTML = `<img src='/assets/img/star-win.svg'>`;
      let audio=new Audio();
      audio.src='/assets/audio/correct.mp3';
      audio.load();
      audio.play();
    } else {
      document.querySelector('.category__title')?.appendChild(starSpan);
      starSpan.innerHTML = `<img src='/assets/img/star.svg'>`;
      let audio=new Audio();
      audio.src='/assets/audio/error.mp3';
      audio.load();
      audio.play();
      console.log('fall')
    }
    }
  }

  inactiveCard(card:Card){
    console.log(card.image)
    /* (card.image as Element).classList.add("inactive"); */
  }

  turnCardAutomatic(event:any){
    ((event.srcElement as Node).parentNode as Element).classList.remove("animate");
  }

  rotate(event:any){
    ((event.srcElement as Node).parentNode?.parentNode?.parentNode as Element).classList.add("animate");
    this.flipped = !this.flipped;
  }

  getRandomSound() {
    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*cards[this.number].length);
    console.log('audioRandom');
    audio.src=cards[this.number][randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord = cards[this.number][randomNumber].word;
  }

}
