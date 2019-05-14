import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { MoreComponent } from './components/more/more.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'more', component: MoreComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];