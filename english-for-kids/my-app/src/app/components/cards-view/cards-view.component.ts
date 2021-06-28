import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
  title: string="animal";
  listNav=categories;
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  flipped=false;
  mode=true;
  public fillerCategory: Card[]|null|undefined=[];
  number: number=0;


  constructor() {

  }

  /* findCategory(){
    if (this.fillerCategory){
    this.category = Array.from({length: 8}, (_, i) => `${this.fillerCategory[i]}`)
    }
  } */

  fillCategory(): Card[] {
    return this.fillerCategory as unknown as Card[]||[];
  }

  getTitle():void {
    this.title = categories[this.number];
  }

  ngOnInit() {
    this.number=this.fillerNav?.indexOf(this.title);
    this.fillerCategory=cards[this.number];
    this.getTitle();
    this.fillCategory();
  }

  soundOn(src: string) {
    let audio=new Audio();
    audio.src=src;
    audio.load();
    audio.play();
    this.mode=!this.mode;
  }

  turnCardAutomatic(event:any){
    this.flipped = !this.flipped;
    event.addEventListener(()=> console.log('dkfj') )
  }

  rotate(event:any){
    ((event.srcElement as Node).parentNode?.parentNode?.parentNode as Element).classList.add("animate");
    this.flipped = !this.flipped;
  }

}
