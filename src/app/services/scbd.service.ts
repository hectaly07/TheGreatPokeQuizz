import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardService {
  constructor(private httpClient: HttpClient) {}

  public getScorebordData(): Observable<any> {
    const httpResponse = this.httpClient
      .get<any>('../scoreboard/scbd.fake.json')
      .pipe(
        map((data) => {
          return data.results;
        })
      );

    return httpResponse;
  }
}