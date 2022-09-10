import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiServerUrl = environment.apiBaseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/education`, {headers: this.httpHeaders})
  }
  
  public addEducation(education: Education): Observable<Education>{
    return this.http.post<Education>(`${this.apiServerUrl}/education`, education, {headers: this.httpHeaders});
  }

  public delete(id: number): Observable<Education>{
    return this.http.delete<Education>(`${this.apiServerUrl}/education/${id}`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => new Error(e));
      })
    )
  }
}
