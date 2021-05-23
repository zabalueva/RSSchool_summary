export class Timer {
  public counter = 0;

  public timer: number;

  constructor() {
    this.timer = 0;
  }

  startTimer() {
    this.timer = window.setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
    }, 1000);
    return `${this.counter}`;
  }

  stopTimer() {
    if (this.counter === 10000) {
      window.clearInterval(this.timer);
    }
  }

  display() {
    return `${this.counter}`;
  }
}

/* export class Timer {
  public startTime: Date = new Date();

  public stopTime: Date = new Date();

  constructor(public active = false) {
  }

  display() {
    return `${(this.startTime && this.stopTime) ? +this.stopTime - +this.startTime : 0}`;
  }

  timer() {
    if (this.active) {
      this.stopTime = new Date();
      window.setTimeout(() => {
        this.timer();
      }, 1000);
    }
  }

  start() {
    this.startTime = new Date();
    this.stopTime = this.stopTime;
    this.active = true;
    this.timer();
  }

  stop() {
    this.stopTime = new Date();
    this.active = false;
  }
} */
