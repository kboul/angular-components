import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];