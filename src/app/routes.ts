import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { MoreComponent } from './components/more/more.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'more', component: MoreComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'course', component: CourseFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'change-password', component: ChangePasswordFormComponent },
    { path: 'posts', component: PostsComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];