import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile';
import { Observable, EMPTY, isEmpty } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public profile: Observable<Profile>;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private observer: BreakpointObserver,
    private profileService: ProfileService,
    private cd: ChangeDetectorRef,
    public translate: TranslateService
  ) {
    this.profile = this.profileService.SharingObservable;
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    const result = EMPTY.pipe(isEmpty());

    if (result) {
      this.getProfile()
    }
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

  logout(): void {
    this.storageService.signOut()
    window.location.reload()
  }


}
