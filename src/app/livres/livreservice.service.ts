import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreserviceService {

  private apiURL = "http://localhost:5000/api/livres";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
  }

  create(livre: Livre): Observable<any> {
    return this.httpClient.post(this.apiURL + '/', livre)
  }

  findById(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + _id)
  }

  update(_id: object, livre: Livre): Observable<any> {
    return this.httpClient.put(this.apiURL + '/' + _id, livre)
  }

  delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/' + _id)
  }
}
