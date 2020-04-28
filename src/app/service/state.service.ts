import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  phoneScreenSubject = new BehaviorSubject<string>('login');
  phoneScreen$ = this.phoneScreenSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  get phoneScreen(): Observable<string> {
    return this.phoneScreen$;
  }

  setPhoneScreen(screenId: string) {
    this.phoneScreenSubject.next(screenId);
  }

  public getJSON(aspect: string, applicationType: string, registrationType: string, sellingDataType: string): Observable<any> {
    return this.http.get<any>('assets/content/' + applicationType + '_' + registrationType + '_' + sellingDataType + '/' + aspect + '.json');
    // return this.http.get<any>('assets/content/' + contentFileName + '_' + lang + '.json');
  }
}
