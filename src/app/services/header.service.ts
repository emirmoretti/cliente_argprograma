import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserApp } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiServerUrl = environment.apiBaseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getUser():Observable<UserApp>{
    return this.http.get<UserApp>(`${this.apiServerUrl}/user/1`);
  }

  public update(usuario: UserApp):Observable<UserApp>{
    return this.http.put<UserApp>(`${this.apiServerUrl}/user/1`, usuario, {headers: this.httpHeaders});
  }
}
