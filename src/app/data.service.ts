import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<any>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
}
