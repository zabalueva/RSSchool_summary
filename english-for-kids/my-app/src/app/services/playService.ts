import cards from "src/assets/cards";
import { Card } from "../models/card";

export class PlayService {
  checkingWord = '';
  cardsPlay: Card[] = cards[0].slice();

  getRandomSound(number: number) {
    this.cardsPlay = cards[number].slice()
    const remover = this.cardsPlay.slice();
    let audio=new Audio();
    console.log(this.cardsPlay[number]);
    const randomNumber = Math.floor(Math.random()*remover.length);
    audio.src=remover[randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord = remover[randomNumber].word;
    remover.splice(randomNumber, 1)
    console.log(randomNumber);
    console.log(remover);
  }

  repeatRandomSound(number: number) {
    let audio=new Audio();
    cards[number].forEach((el) => el.word === this.checkingWord ? audio.src=el.audioSrc : '');
    console.log(audio.src)
    audio.load();
    audio.play();
  }
}