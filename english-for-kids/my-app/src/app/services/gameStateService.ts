import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable()
export class ModeService {
  public game$ = new BehaviorSubject<boolean>(false);

  get modeS$(){
    return this.game$.asObservable();
  }

  toggleMode(data:boolean){
    this.game$.next(data);
  }
}