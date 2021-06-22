import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Category } from 'src/app/models/category';
impoet { AppRoutingModule }

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
