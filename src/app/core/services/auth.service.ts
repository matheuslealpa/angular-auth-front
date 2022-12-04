import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  public sign(payload: {username:string, password:string}): Observable<any>{
    return this.httpClient.post<any>(`${this.url}/sign`, payload).pipe(
      map((data) => {
        return console.log(data)
      }),
      catchError((e) => {
        if(e.error.message) return throwError(()=> e.error.message);
        return throwError(()=> 'server currently unavailable');
      })
    )
  }
}
