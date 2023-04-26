import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  public selectLanguage = new BehaviorSubject<string>('en');
  // data = this.selectLanguage.asObservable()

  // select(event: any) {
  //   this.selectLanguage.next(event)
  // }
}
