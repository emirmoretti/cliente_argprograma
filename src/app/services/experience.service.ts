import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiServerUrl = environment.apiBaseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getExperienceId(id: number): Observable<Experience> {
    return this.http.get<Experience>(`${this.apiServerUrl}/experience/${id}`, { headers: this.httpHeaders });
  }
  public getAllExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.apiServerUrl}/experience`, {headers: this.httpHeaders});
  }
  public createExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.apiServerUrl}/experience`, experience, {headers: this.httpHeaders});
  }
  public updateExperience(experience: Experience):Observable<Experience>{
    return this.http.put<Experience>(`${this.apiServerUrl}/experience/${experience.id}`, experience, {headers: this.httpHeaders})
  }
  public deleteExperience(id: number):Observable<Experience>{
    return this.http.delete<Experience>(`${this.apiServerUrl}/experience/${id}`, {headers: this.httpHeaders})
  }
}
