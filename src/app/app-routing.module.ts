import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { BlogComponent } from './blog/blog.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'form', component: FormComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
