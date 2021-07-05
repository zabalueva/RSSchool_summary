import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable()
export class GameStateService {
  public game$ = new BehaviorSubject<boolean>(false);

  get gameS$(){
    return this.game$.asObservable();
  }

  toggleMode(data:boolean){
    this.game$.next(data);
  }
}