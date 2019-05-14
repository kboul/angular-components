import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { GithubFollowers } from 'src/app/models/github-followers';

@Component({
    selector: 'github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.sass']
})

export class GithubFollowersComponent implements OnInit {
    followers: Array<GithubFollowers>;

    constructor(private service: GithubService) { }

    ngOnInit() {
        this.service.get()
            // followers: array of followers' objects 
            .subscribe((followers: Array<GithubFollowers>) => {
                this.followers = followers;
                console.log(this.followers);
            });
    }
}