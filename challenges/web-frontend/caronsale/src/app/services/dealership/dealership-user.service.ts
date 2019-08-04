import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Auction } from 'src/app/models/auction';

import { dealership } from '../../constants/api';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealershipUserService {

  constructor(private httpService: HttpClient) { }

  public getAuctions(): Observable<Auction[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        userid: localStorage.getItem('userId'),
        authtoken: localStorage.getItem('token')
      })
    };

    return this.httpService.get<Auction[]>(
      `${dealership}${localStorage.getItem('userId')}`,
      httpOptions
    ).pipe(
        map(data => data.map(e => new Auction().deserialize(e))),
        catchError(() => throwError('no auctions where found for this user'))
    );
  }
}
