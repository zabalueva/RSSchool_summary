import cards from "src/assets/cards";
import { Card } from "../models/card";

export class PlayService {
  checkingWord = '';
  cardsPlay: Card[] = [];
  points: number = 0;
  remover: Card[] = [];

  getRandomSound(number: number) {
    if (this.checkingWord === '') {
console.log('dfkjdf');
this.cardsPlay = cards[number].slice();
this.remover = this.cardsPlay.slice();
    }


    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*this.remover.length);
    audio.src=this.remover[randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord = this.remover[randomNumber].word;
    this.remover.splice(randomNumber, 1);
    console.log(randomNumber);
    console.log(this.cardsPlay);
  }

  repeatRandomSound(number: number) {
    let audio=new Audio();
    cards[number].forEach((el) => el.word === this.checkingWord ? audio.src=el.audioSrc : '');
    console.log(audio.src)
    audio.load();
    audio.play();
  }

  incrementPoints(){
    this.points = this.points + 1;
  }
  getPoints(){
    return this.points;
  }
}