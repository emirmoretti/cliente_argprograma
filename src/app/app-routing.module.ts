import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { FormEducationComponent } from './components/education/form-education/form-education.component';

const routes: Routes = [
  {path: 'education', component: EducationComponent},
  {path: 'education/form', component: FormEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
