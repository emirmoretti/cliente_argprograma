import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiServerUrl = environment.apiBaseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiServerUrl}/projects/${id}`, { headers: this.httpHeaders })
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/projects`, { headers: this.httpHeaders })
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/projects`, project, { headers: this.httpHeaders });
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/projects/${project.id}`, project, { headers: this.httpHeaders });
  }

  public delete(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.apiServerUrl}/projects/${id}`, {headers: this.httpHeaders})
  }

  public subirFoto(archivo: File, id: any): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo); // "archivo" mismo nombre q pusismos en el backend
    formData.append("id", id);
    //const req = new HttpRequest('POST', `${this.apiServerUrl}/education/image`, formData);
    return this.http.post<HttpEvent<{}>>(`${this.apiServerUrl}/projects/image`, formData);
  }
  
}
