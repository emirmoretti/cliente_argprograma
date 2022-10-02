import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
