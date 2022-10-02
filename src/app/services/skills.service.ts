import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiServerUrl = environment.apiBaseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getSkillsById(id: any): Observable<Skills> {
    return this.http.get<Skills>(`${this.apiServerUrl}/skills/${id}`, {headers: this.httpHeaders});
  }

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills`, {headers: this.httpHeaders});
  }

  public addSkill(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.apiServerUrl}/skills`, skills, { headers: this.httpHeaders });
  }

  public updateSkill(skills: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.apiServerUrl}/skills/${skills.id}`, skills, { headers: this.httpHeaders });
  }

  public deleteSkill(id: number): Observable<Skills> {
    return this.http.delete<Skills>(`${this.apiServerUrl}/skills/${id}`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => new Error(e));
      })
    )
  }

  public subirFoto(archivo: File, id: any): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo); // "archivo" mismo nombre q pusismos en el backend
    formData.append("id", id);

    //const req = new HttpRequest('POST', `${this.apiServerUrl}/skills/image`, formData);
    return this.http.post<HttpEvent<{}>>(`${this.apiServerUrl}/skills/image`, formData);
  }
}
