import { EventEmitter, Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  themeTogglerEvent: EventEmitter<object> = new EventEmitter();

  constructor() { }

  //share localwallet data
  editLocal : any = []
  private localData = new  BehaviorSubject(this.editLocal);
  changeLocal = this.localData.asObservable();

  changeLocaldata(message: any) {
  this.localData.next(message)
  }
 
  // localstorage value detection 

  private storageSub = new Subject<String>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any, type:any) {
    localStorage.setItem(key, data);
    this.storageSub.next(type);
  }

  getThemeTogEvent(){
    return this.themeTogglerEvent;
  }

  emitThemeTogEvent(data:any = ''){
    this.themeTogglerEvent.emit(data);
  }
  

}
