import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LotteryResult } from './Entity/lotteryResult';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadresultService {
  constructor(private http: HttpClient) { }
  uploadLotteryResult(lotteryResult): Observable<LotteryResult> {
    console.log(lotteryResult)
    return this.http.post<any>(`http://localhost:8080/create-result`, lotteryResult);
  }
  viewLotteryResults(): Observable<LotteryResult[]> {
    return this.http.get<LotteryResult[]>(`http://localhost:8080/get-results`);
  }

}
