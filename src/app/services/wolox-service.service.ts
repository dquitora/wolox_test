import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../services/wolox-model';

@Injectable({
  providedIn: 'root'
})
export class WoloxServiceService {

  constructor(private httpclient: HttpClient) { }

  getPaises(): Observable<any> {   
    return this.httpclient.get("https://restcountries.eu/rest/v2/all" );
  }

  getPokemon(): Observable<any> {   
    return this.httpclient.get("https://pokeapi.co/api/v2/pokemon?offset=1000&limit=1000" );
  }

  submitSignUp(user1: User): Observable<User> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin' : '*' , 
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
   }); 
   let options = {
    headers: httpHeaders
 }; 
        return this.httpclient.post<User>("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup", user1,options);         
  }

}


