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

  title: string | null = "animal";

  fillerNav = Array.from({ length: 8 }, (_, i) => `${categories[i]}`);
  flipped = false;
  mode = true;
  public fillerCategory: Card[]|null|undefined=[];
  numberCategory: number = 0;


  constructor(private nodeService:NodeService, private router: Router) {
    //by @fomenkogregory
    this.number = this.router.getCurrentNavigation()?.extras.state?.categoryIndex ?? 1
  }

  getTitle():void {
    if (document.getElementsByClassName('menu__item-active')[0].textContent) {
      this.title = document.getElementsByClassName('menu__item-active')[0].textContent;
      console.log(this.title);
     /*  this.number = categories.indexOf(document.getElementsByClassName('menu__item-active')[0].textContent as String);
     */
    }
  }

  ngOnInit() {
    this.getTitle();
    if (this.title){
    this.number = categories.indexOf(this.title);
    }
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
