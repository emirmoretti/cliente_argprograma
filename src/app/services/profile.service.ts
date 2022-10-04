import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  private _notificarUpload = new EventEmitter<any>();

  private sharingObservablePrivate: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(new Profile);


  get SharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(profile: Profile) {
    this.sharingObservablePrivate.next(profile);
  }

  constructor(private http: HttpClient) { }

  get notificarUpload(): EventEmitter<any> {
    return this._notificarUpload;
  }

  public getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiServerUrl}/profile`);
  }
  public saveProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiServerUrl}/profile`, profile, { headers: this.httpHeaders })
  }
  public update(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiServerUrl}/profile`, profile, { headers: this.httpHeaders });
  }

  public subirFoto(archivo: File): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    //const req = new HttpRequest('POST', `${this.apiServerUrl}/skills/image`, formData);
    return this.http.post<HttpEvent<{}>>(`${this.apiServerUrl}/profile/image`, formData);
  }
}
