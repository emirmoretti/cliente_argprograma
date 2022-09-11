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

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProfileComponent,
    HeaderComponent,
    FormEducationComponent,
    ImageDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
