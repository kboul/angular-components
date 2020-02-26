import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { combineLatest } from "rxjs/index";
import { switchMap } from "rxjs/operators";
import { GithubFollowersService } from "src/app/services/github-followers.service";
import { GithubFollowers } from "src/app/models/github-followers";

@Component({
	selector: "github-followers",
	templateUrl: "./github-followers.component.html",
	styleUrls: ["./github-followers.component.sass"]
})
export class GithubFollowersComponent implements OnInit {
	followers: Array<GithubFollowers>;

	constructor(
		private route: ActivatedRoute,
		private service: GithubFollowersService
	) {}

	ngOnInit() {
		combineLatest([this.route.paramMap, this.route.queryParamMap])
			.pipe(
				switchMap(combined => {
					const id = combined[0].get("id");
					const page = combined[1].get("page");

					return this.service.getFollowers();
				})
			)
			.subscribe((followers: Array<GithubFollowers>) => {
				this.followers = followers;
				console.log(this.followers);
			});
	}
}
