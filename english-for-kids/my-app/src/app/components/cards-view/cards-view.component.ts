import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { NodeService } from 'src/app/services/nodeService';
import { Subscription } from 'rxjs';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-cards-view',
  providers: [NodeService],
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
  @Input() number:number = 6;
  title: string="animal";
  listNav=categories;
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  flipped=false;
  mode=true;
  public fillerCategory: Card[]|null|undefined=[];
  /* number: number = 0; */

  constructor(nodeService:NodeService) {
    console.log(this.number)
  }

  fillCategory(): Card[] {
    return this.fillerCategory as unknown as Card[]||[];
  }

  getTitle():void {
    this.title = categories[this.number];
    console.log(this.number, this.title)
  }

  ngOnInit() {
    this.getTitle();
    this.number=this.fillerNav?.indexOf(this.title);
    this.fillerCategory=cards[this.number];
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
    ((event.srcElement as Node).parentNode as Element).classList.remove("animate");
  }

  rotate(event:any){
    ((event.srcElement as Node).parentNode?.parentNode?.parentNode as Element).classList.add("animate");
    this.flipped = !this.flipped;
  }



}
