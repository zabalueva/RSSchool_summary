import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ModeService } from 'src/app/services/modeService';
import { Subscription } from 'rxjs';
import cards, { categories } from 'src/assets/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-view',
  providers: [ModeService],
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


  constructor(private modeService:ModeService, private router: Router) {
    //by @fomenkogregory
    this.number = this.router.getCurrentNavigation()?.extras.state?.categoryIndex ?? 1
  }

  getTitle():void {
    if (document.getElementsByClassName('menu__item-active')[0].textContent) {
      if (document.getElementsByClassName('menu__item-active')[0].textContent === 'Main Page') {
        this.title = categories[this.number];
        console.log('fj')
      } else {
      this.title = document.getElementsByClassName('menu__item-active')[0].textContent;
      }
    }
    console.log(this.mode);
  }

  ngOnInit() {
    this.modeService.mode$.subscribe((mode) => this.mode=mode);
    this.getTitle();
    console.log(this.title)
    if (document.getElementsByClassName('menu__item-active')[0].textContent !== 'Main Page'){
      if(typeof(this.title) === 'string'){
            this.number = categories.indexOf(this.title);
      }
    }
    this.fillerCategory = cards[this.number];
  }

  soundOn(src: string) {
    this.mode = !this.mode;
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
