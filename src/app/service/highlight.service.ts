import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  highlightAppSubject = new BehaviorSubject<number[]>([]);
  highlightApp$ = this.highlightAppSubject.asObservable();

  highlightLawSubject = new BehaviorSubject<number[]>([]);
  highlightLaw$ = this.highlightLawSubject.asObservable();

  highlightItSubject = new BehaviorSubject<number[]>([]);
  highlightIt$ = this.highlightItSubject.asObservable();

  highlightEconomySubject = new BehaviorSubject<number[]>([]);
  highlightEconomy$ = this.highlightEconomySubject.asObservable();

  constructor() {
  }

  get highlightApp(): Observable<number[]> {
    return this.highlightApp$;
  }

  highlightInApp(paragraphId: number[]) {
    this.highlightAppSubject.next(paragraphId);
  }

  get highlightLaw(): Observable<number[]> {
    return this.highlightLaw$;
  }

  highlightInLaw(paragraphId: number[]) {
    this.highlightLawSubject.next(paragraphId);
  }

  get highlightIt(): Observable<number[]> {
    return this.highlightIt$;
  }

  highlightInIt(paragraphId: number[]) {
    this.highlightItSubject.next(paragraphId);
  }

  get highlightEconomy(): Observable<number[]> {
    return this.highlightEconomy$;
  }

  highlightInEconomy(paragraphId: number[]) {
    this.highlightEconomySubject.next(paragraphId);
  }
}
