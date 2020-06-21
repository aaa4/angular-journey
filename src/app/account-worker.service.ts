import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountWorkerService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Account[]> {
    const href = 'http://localhost:8080/users';
    return this.http.get<Account[]>(href);
  }
}
