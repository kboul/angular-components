import { Component, OnInit } from "@angular/core";
import { AppError } from "../../common/app-error";
import { BadRequestError } from "../../common/bad-request-error";
import { NotFoundError } from "../../common/not-found-error";
import { PostService } from "../../services/post.service";
import { Posts } from "../../models/posts";

@Component({
	selector: "posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.sass"]
})
export class PostsComponent implements OnInit {
	posts: Array<Posts>;

	constructor(private service: PostService) {}

	ngOnInit() {
		this.service
			.get()
			// posts: array of objects
			.subscribe((posts: Array<Posts>) => (this.posts = posts));
	}

	createPost(input: HTMLInputElement) {
		let post: any = { title: input.value };
		this.posts.splice(0, 0, post); //add in the beginning of the list - optimistic update

		// clear input field after new addition
		input.value = "";

		this.service.post(post).subscribe(
			(newPost: Posts) => {
				post.id = newPost.id;
			},
			(error: AppError) => {
				// in case of optimistic update failure
				// remove the new post of the top of the array
				this.posts.splice(0, 1);

				if (error instanceof BadRequestError) {
				} else throw error;
			}
		);
		console.log(this.posts);
	}

	updatePost(post) {
		// patch (not widely supported) updates only a few properties instead of the entire object
		this.service.update(post).subscribe(updatedPost => {
			console.log(updatedPost);
		});
		//this.http.put(this.url, JSON.stringify(post));
	}

	deletePost(post) {
		// Optimistic update
		let index = this.posts.indexOf(post);
		console.log(index);
		this.posts.splice(index, 1);
		/* 
            normally it should be post.id but here we can not 
            pass dynamically the post.id, it is one from the fake api
            345 instead of 1 for a 404 not found
        */
		this.service
			.delete(1) //post.id
			.subscribe(
				// response is empty here, not required
				null,
				(error: AppError) => {
					// define type of error by annotating it
					// in case of optimistic delete failure
					// add the new post where it belonged
					this.posts.splice(index, 0, post);

					if (error instanceof NotFoundError)
						alert("This post has already been deleted.");
					else throw error;
				}
			);
	}
}
