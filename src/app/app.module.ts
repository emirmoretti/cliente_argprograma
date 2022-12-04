import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';
import { ImageDetailsComponent } from './components/education/image-details/image-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SkillsComponent } from './components/skills/skills.component';
import { ImageDetailsSkillsComponent } from './components/skills/image-details-skills/image-details-skills.component';
import { FormSkillsComponent } from './components/skills/form-skills/form-skills.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsFormComponent } from './components/projects/projects-form/projects-form.component';
import { ExperienceFormComponent } from './components/experience/experience-form/experience-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { SpinnerModule } from './components/spinner/spinner.module';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { EducationpageComponent } from './pages/educationpage/educationpage.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwitchLangComponent } from './components/switch-lang/switch-lang.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProfileComponent,
    FormEducationComponent,
    ImageDetailsComponent,
    SkillsComponent,
    ImageDetailsSkillsComponent,
    FormSkillsComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProjectsFormComponent,
    ExperienceFormComponent,
    LoginComponent,
    RegisterComponent,
    ProjectspageComponent,
    EducationpageComponent,
    SwitchLangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    SpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
