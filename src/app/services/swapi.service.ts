import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SwapiService {
  constructor(private http: HttpClient) { }

  public person(id: number){
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  public position(pos: string){
    return this.http.get(pos);
  }
}
