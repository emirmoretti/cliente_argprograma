import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
