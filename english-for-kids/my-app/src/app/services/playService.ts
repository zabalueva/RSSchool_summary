import cards from "src/assets/cards";

export class PlayService {
  checkingWord = '';

  getRandomSound(number: number) {
    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*cards[number].length);
    audio.src=cards[number][randomNumber].audioSrc;
    audio.load();
    audio.play();
    console.log('sound')
    this.checkingWord = cards[number][randomNumber].word;
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