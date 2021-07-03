import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.scss']
})

export class PlayViewComponent implements OnInit {
  removeExpansion: number = 4;
  number: number=6;
  title: string="animal";
  checkingWord:string = '';

  public fillerCategory: Card[]|null|undefined=[];
  constructor(private router: Router) {
    this.number=this.router.getCurrentNavigation()?.extras.state?.categoryIndex??0;
    console.log(this.number)
  }

  getTitle(): void {
    this.title=categories[this.number];
  }

  ngOnInit() {
    this.getTitle();
    this.number=categories.indexOf(this.title);
    this.fillerCategory=cards[this.number];
    this.getRandomSound();
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

  repeatRandomSound() {
    let audio=new Audio();
    /* audio.src=cards[this.number].forEach((el) => Array.from(el));
    audio.load();
    audio.play();
    this.checkingWord = cards[this.number][randomNumber].word; */
  }

  checkCorrect(event:any){
    const index = Array.from(event.srcElement.src).lastIndexOf('/');
    console.log(Array.from(event.srcElement.src).slice(index+1, Array.from(event.srcElement.src).length - this.removeExpansion).join(''))
    const selectedWord = Array.from(event.srcElement.src).slice(index+1, Array.from(event.srcElement.src).length - this.removeExpansion).join('');
    if (this.checkingWord === selectedWord){
      console.log('jdfh')
    }
  }

}
