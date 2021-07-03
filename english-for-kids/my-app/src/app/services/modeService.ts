import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable()
export class ModeService {
  public mode$ = new BehaviorSubject<boolean>(false);

  get modeS$(){
    return this.mode$.asObservable();
  }

  toggleMode(data:boolean){
    this.mode$.next(data);
  }

}