import cards from "src/assets/cards";
import { Card } from "../models/card";

export class PlayService {
  checkingWord = '';
  cardsPlay: Card[][] = cards;

  getRandomSound(number: number) {
    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*this.cardsPlay[number].length);
    audio.src=this.cardsPlay[number][randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord = this.cardsPlay[number][randomNumber].word;
    this.cardsPlay.slice()
    console.log(this.checkingWord);
  }

  repeatRandomSound(number: number) {
    let audio=new Audio();
    cards[number].forEach((el) => el.word === this.checkingWord ? audio.src=el.audioSrc : '');
    console.log(audio.src)
    audio.load();
    audio.play();
  }
}