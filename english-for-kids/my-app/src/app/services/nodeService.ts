import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class NodeService {
  private number = new Subject<number>();

  get number$(){
    return this.number.asObservable();
  }

  addNode(data:number) {
    this.number.next(data);
    console.log(data)
  }
}