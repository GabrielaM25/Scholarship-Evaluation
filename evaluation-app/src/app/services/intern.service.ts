import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../trimble-interns/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  readonly baseUrl = 'https://localhost:5001/Interns/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  constructor(private httpClient: HttpClient) { }
 
  getInterns(): Observable<Intern[]> {
    return this.httpClient.get<Intern[]>(
      this.baseUrl ,
      this.httpOptions
    );
  }
  addIntern(intern: Intern) {
    return this.httpClient.post(this.baseUrl, intern, this.httpOptions);
  }
  deleteIntern(id: string){
     return this.httpClient.delete(this.baseUrl +id,this.httpOptions)

  }
  editIntern(intern: Intern){
    return this.httpClient.put(this.baseUrl  + intern.id, intern, this.httpOptions);

  }
  getById(id: string) {
    console.log(this.baseUrl +id )
    return this.httpClient.get<Intern>(this.baseUrl +id,this.httpOptions);
}
}