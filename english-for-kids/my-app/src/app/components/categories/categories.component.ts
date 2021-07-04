import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/modeService';
import cards from 'src/assets/cards';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  listNav=cards[0];
  fillerNav=Array.from({ length: 8 }, (_, i) => `${this.listNav[i]}`);
  link='/card';
  mode=false;

  constructor(private modeService: ModeService) {
    modeService.mode$.subscribe((mode) => this.mode=mode);
  }

  ngOnInit() {
    if (this.mode) {
      if (document.getElementsByClassName('card__title-container')) {
        Array.from(document.getElementsByClassName('card__title-container')).forEach((el) => (el as HTMLElement).style.backgroundColor='#34a7c1')
      }
    }
  }
}
