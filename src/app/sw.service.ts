import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vaisseau } from './sw-list/Vaisseau';




@Injectable({ providedIn: 'root' })
export class  VaisseauService {

  private VaisseauUrl = 'https://swapi.dev/api/starships/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }



   getVaisseaux(): Observable<any> {
    return this.http.get<any>(this.VaisseauUrl)
  }

  getPilotes(url : string): Observable<any> {   
    return this.http.get<any>(url);
  }


}
