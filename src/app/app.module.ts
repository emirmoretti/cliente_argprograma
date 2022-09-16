import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';
import { ImageDetailsComponent } from './components/education/image-details/image-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SkillsComponent } from './components/skills/skills.component';
import { ImageDetailsSkillsComponent } from './components/skills/image-details-skills/image-details-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProfileComponent,
    HeaderComponent,
    FormEducationComponent,
    ImageDetailsComponent,
    SkillsComponent,
    ImageDetailsSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
