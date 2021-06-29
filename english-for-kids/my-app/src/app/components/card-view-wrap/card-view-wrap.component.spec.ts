import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewWrapComponent } from './card-view-wrap.component';

describe('CardViewWrapComponent', () => {
  let component: CardViewWrapComponent;
  let fixture: ComponentFixture<CardViewWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
