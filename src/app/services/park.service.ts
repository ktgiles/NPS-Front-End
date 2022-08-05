import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(private httpClient: HttpClient) { }

  getAllParks(): Observable<any[]> {
   return this.httpClient.get<any[]>("http://localhost:9001/api/parks");
  }
}
