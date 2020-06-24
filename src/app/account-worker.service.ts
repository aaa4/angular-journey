import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountWorkerService {

  constructor(private http: HttpClient) {
  }

  // example url:  http://localhost:8080/users/paginated?sort=name&order=asc&page=1
  getData(sort: string, order: string, page: number): Observable<Account[]> {
    // old // const href = 'http://localhost:8080/users';
    const href = `http://localhost:8080/users/paginated?sort=${sort}&order=${order}&page=${page}`;
    return this.http.get<Account[]>(href);
  }
}
