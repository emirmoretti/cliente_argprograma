import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiServerUrl = environment.apiBaseUrl;
  
  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getProfile():Observable<Profile>{
    return this.http.get<Profile>(`${this.apiServerUrl}/profile`);
  }
  public update(profile: Profile):Observable<Profile>{
    return this.http.put<Profile>(`${this.apiServerUrl}/profile`, profile, {headers: this.httpHeaders});
  }
}
