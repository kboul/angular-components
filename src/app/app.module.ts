import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { AuthorsComponent } from "./components/authors/authors.component";
import { MoreComponent } from "./components/more/more.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { BootstrapPanelComponent } from "./components/bootstrap-panel/bootstrap-panel.component";
import { LikeComponent } from "./components/like/like.component";
import { ZippyComponent } from "./components/zippy/zippy.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { ChangePasswordFormComponent } from "./components/change-password-form/change-password-form.component";
import { PostsComponent } from "./components/posts/posts.component";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";

import { EuroPipe } from "./pipes/euro.pipe";
import { SummaryPipe } from "./pipes/summary.pipe";
import { TitleCasePipe } from "./pipes/title-case.pipe";

import { CoursesService } from "./services/courses.service";
import { AuthorsService } from "./services/authors.service";
import { PostService } from "./services/post.service";
import { GithubFollowersService } from "./services/github-followers.service";

import { InputFormatDirective } from "./directives/input-format.directive";

import { routes } from "./routes";

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
		LikeComponent,
		InputFormatDirective,
		ZippyComponent,
		ContactFormComponent,
		CourseFormComponent,
		SignupFormComponent,
		ChangePasswordFormComponent,
		PostsComponent,
		GithubFollowersComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes, {})
	],
	providers: [
		CoursesService,
		AuthorsService,
		PostService,
		GithubFollowersService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
