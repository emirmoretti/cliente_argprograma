import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'app-argprograma';

  public profile: Observable<Profile>;

  constructor(
    private observer: BreakpointObserver,
    private profileService: ProfileService,
    private cd: ChangeDetectorRef
  ) { this.profile = this.profileService.SharingObservable; }

  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(): void {
    this.profileService.getProfile().subscribe(
      {
        next: (response: Profile) => {
          this.profileService.sharingObservableData = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close()
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
    this.cd.detectChanges();
  }

}
