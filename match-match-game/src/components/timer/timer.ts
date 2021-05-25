import { BaseComponent } from "../base/base";

export class Timer extends BaseComponent {
  public counter = 0;

  public timer: number;

  constructor() {
    super('div', ['timer']);
    this.timer=0;
  }

  startTimer() {
    this.timer = window.setInterval(() => {
      this.counter+=1;
      this.element.textContent=`Timer: ${Math.ceil(this.counter)}

      These are seconds that go by.
      Don't focus on displaying them - just play!`
    }, 1000);
    return `${this.counter}`;
  }

  stopTimer() {
    window.clearInterval(this.timer);
    let timeGame = this.counter;
    return this.counter;
  }
}
