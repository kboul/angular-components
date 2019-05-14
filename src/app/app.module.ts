import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { MoreComponent } from './components/more/more.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';

import { EuroPipe } from './pipes/euro.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

import { routes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CoursesComponent,
        EuroPipe,
        SummaryPipe,
        TitleCasePipe,
        AuthorsComponent,
        MoreComponent,
        FavoriteComponent,
        BootstrapPanelComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        CoursesService,
        AuthorsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }