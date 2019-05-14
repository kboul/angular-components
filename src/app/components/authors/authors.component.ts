import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.sass']
})

export class AuthorsComponent {
    authors: Array<String>;

    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
    }
}