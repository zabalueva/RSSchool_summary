import { BaseComponent } from '../base/base';

export class Timer extends BaseComponent {
  public counter = 0;

  public timer: number;

  constructor() {
    super('div', ['timer']);
    this.timer = 0;
  }

  startTimer():string {
    this.timer = window.setInterval(() => {
      const minutes = Math.ceil(Math.ceil(this.counter) / 60);
      this.counter += 1;
      if (this.counter < 10) {
        this.element.textContent = `00:0${Math.ceil(this.counter)}`;
      } else if (this.counter > 60 && minutes < 10) {
        this.element.textContent = `0 ${minutes}:${Math.ceil(this.counter - minutes * 60)}`;
      } else if (minutes > 10) {
        this.element.textContent = `${minutes}:${Math.ceil(this.counter)}`;
      } else {
        this.element.textContent = `00:${Math.ceil(this.counter)}  These are seconds that go by.
        Don't focus on displaying them - just play!`;
      }
    }, 1000);
    return `${this.counter}`;
  }

  stopTimer():number {
    window.clearInterval(this.timer);
    return this.counter;
  }
}
