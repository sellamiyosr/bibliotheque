import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editeur } from './editeur';

@Injectable({
  providedIn: 'root'
})
export class EditeurserviceService {

  private apiURL = "http://localhost:5000/api/editeurs";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
  }

  create(editeur: Editeur): Observable<any> {
    return this.httpClient.post(this.apiURL + '/', editeur)
  }

  findById(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + _id)
  }

  update(_id: object, editeur: Editeur): Observable<any> {
    return this.httpClient.put(this.apiURL + '/' + _id, editeur)
  }

  delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/' + _id)
  }
}
