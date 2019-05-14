import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { EuroPipe } from './pipes/euro.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';

import { CoursesService } from './services/courses.service';

const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CoursesComponent,
        EuroPipe,
        SummaryPipe,
        TitleCasePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        CoursesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }