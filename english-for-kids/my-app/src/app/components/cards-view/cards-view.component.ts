import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { NodeService } from 'src/app/services/nodeService';
import { Subscription } from 'rxjs';
import cards, { categories } from 'src/assets/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-view',
  providers: [NodeService],
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
  @Input() number:number = 6;

  title: string = "animal";

  fillerNav = Array.from({ length: 8 }, (_, i) => `${categories[i]}`);
  flipped = false;
  mode = true;
  public fillerCategory: Card[]|null|undefined=[];
  numberCategory: number = 0;


  constructor(private nodeService:NodeService, private router: Router) {
    //by @fomenkogregory
    this.number = this.router.getCurrentNavigation()?.extras.state?.categoryIndex ?? 0
  }

  getTitle():void {
    this.title = categories[this.number];
  }

  ngOnInit() {
    this.getTitle();
    this.number = categories.indexOf(this.title);
    this.fillerCategory = cards[this.number];
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
