import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService extends DataService {
    constructor(http: HttpClient) {
        super('https://api.github.com/users/kboul/followers', http);
    }
}