import { Injectable } from '@angular/core';
import { Deparatment } from '../trimble-interns/deparatment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentsService {
  departaments: Deparatment[] = [
    {name:'Angular', id:'1'},
    {name:'C#', id:'2'},
    {name:'Java', id:'3'}
    
  ];
  constructor() { }
  public getDepartaments(): Deparatment[] {
    return this.departaments;
  }
  public getDepartamentById(id: string): Deparatment{
    return this.departaments.find((departament)=> departament.id === id);
  }
}
