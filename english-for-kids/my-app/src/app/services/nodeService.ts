import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class NodeService {
  private node = new Subject<number>();

  get node$(){
    return this.node.asObservable();
  }

  addNode(data:number) {
    this.node.next(data);
    console.log(data)
  }
}