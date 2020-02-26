import { Injectable } from "@angular/core";

@Injectable()
export class AuthorsService {
	getAuthors(): Array<String> {
		return ["author1", "author2", "author3"];
	}
}
