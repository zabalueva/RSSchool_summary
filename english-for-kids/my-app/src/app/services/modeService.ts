import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable()
export class ModeService {
  public mode = new BehaviorSubject<boolean>(false);

  get mode$(){
    return this.mode.asObservable();
  }

}