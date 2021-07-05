import cards from "src/assets/cards";
import { Card } from "../models/card";

export class PlayService {
  checkingWord='';
  cardsPlay: Card[]=[];
  points: number=0;
  removercardsPlay: Card[]=[];

  getRandomSound(number: number) {
    if (this.checkingWord==='') {
      this.cardsPlay=cards[number].slice();
      this.removercardsPlay=this.cardsPlay.slice();
    }
    let audio=new Audio();
    const randomNumber=Math.floor(Math.random()*this.removercardsPlay.length);
    audio.src=this.removercardsPlay[randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord=this.removercardsPlay[randomNumber].word;
    this.removercardsPlay.splice(randomNumber, 1);
  }

  repeatRandomSound(number: number) {
    let audio=new Audio();
    cards[number].forEach((el) => el.word===this.checkingWord? audio.src=el.audioSrc:'');
    console.log(audio.src)
    audio.load();
    audio.play();
  }

  incrementPoints() {
    this.points=this.points+1;
  }
  getPoints() {
    return this.points;
  }
}