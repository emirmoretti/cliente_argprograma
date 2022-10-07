import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';
import { ExperienceFormComponent } from './components/experience/experience-form/experience-form.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsFormComponent } from './components/projects/projects-form/projects-form.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { FormSkillsComponent } from './components/skills/form-skills/form-skills.component';
import { SkillsComponent } from './components/skills/skills.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'education', component: EducationComponent, canActivate: [VigilanteGuard]},
  {path: 'education/form', component: FormEducationComponent,  canActivate: [VigilanteGuard]},
  {path: 'education/form/:id', component: FormEducationComponent,  canActivate: [VigilanteGuard]},
  {path: 'skills', component: SkillsComponent,  canActivate: [VigilanteGuard]},
  {path: 'skills/form', component: FormSkillsComponent,  canActivate: [VigilanteGuard]},
  {path: 'skills/form/:id', component: FormSkillsComponent,  canActivate: [VigilanteGuard]},
  {path: 'projects', component: ProjectsComponent,  canActivate: [VigilanteGuard]},
  {path: 'projects/form', component: ProjectsFormComponent,  canActivate: [VigilanteGuard]},
  {path: 'projects/form/:id', component: ProjectsFormComponent,  canActivate: [VigilanteGuard]},
  {path: 'experience', component: ExperienceComponent,  canActivate: [VigilanteGuard]},
  {path: 'experience/form', component: ExperienceFormComponent,  canActivate: [VigilanteGuard]},
  {path: 'experience/form/:id', component: ExperienceFormComponent ,  canActivate: [VigilanteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
