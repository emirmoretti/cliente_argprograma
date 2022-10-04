import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';
import { ExperienceFormComponent } from './components/experience/experience-form/experience-form.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsFormComponent } from './components/projects/projects-form/projects-form.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormSkillsComponent } from './components/skills/form-skills/form-skills.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'education/form', component: FormEducationComponent},
  {path: 'education/form/:id', component: FormEducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'skills/form', component: FormSkillsComponent},
  {path: 'skills/form/:id', component: FormSkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/form', component: ProjectsFormComponent},
  {path: 'projects/form/:id', component: ProjectsFormComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'experience/form', component: ExperienceFormComponent},
  {path: 'experience/form/:id', component: ExperienceFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
