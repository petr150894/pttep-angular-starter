import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppHeaderService {
  private pageTitleSubject: Subject<string>;

  constructor(
  ) {
    this.pageTitleSubject = new Subject<string>();
  }

  public get pageTitleSubscriber(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }

  public setPageTitle(title: string): void {
    this.pageTitleSubject.next(title);
  }
}
