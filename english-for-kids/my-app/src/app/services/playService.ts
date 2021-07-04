import cards from "src/assets/cards";

export class PlayService {

  getRandomSound(number: number) {
    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*cards[number].length);
    console.log(randomNumber);
    audio.src=cards[number][randomNumber].audioSrc;
    audio.load();
    audio.play();
    const checkingWord = cards[number][randomNumber].word;
  }
}