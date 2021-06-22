import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category: Category = {
    title: "Something good",
    };
  constructor() { }

  ngOnInit(): void {
  }

}
