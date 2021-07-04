export class PlayService {

  get number$(){
    return this.number.asObservable();
  }

  getRandomSound() {
    let audio=new Audio();
    const randomNumber = Math.floor(Math.random()*cards[this.number].length);
    console.log(randomNumber);
    audio.src=cards[this.number][randomNumber].audioSrc;
    audio.load();
    audio.play();
    this.checkingWord = cards[this.number][randomNumber].word;
  }
}