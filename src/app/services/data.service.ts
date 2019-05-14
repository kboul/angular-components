
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class DataService {

    constructor(private url: string, private http: HttpClient) { }

    // HTTP GET
    get() {
        return this.http.get(this.url)
            // transform here the response into an array of js objects
            .pipe(
                map(response => response),
                catchError(this.handleError)
            )
    }

    post(resource) {
        // fake an error response by throwing an error Observable
        // return Observable.throw(new AppError());

        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(response => response),
                catchError(this.handleError)
            )
    }

    update(post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
            .pipe(
                map(response => response),
                catchError(this.handleError)
            )
    }

    delete(id) {
        // fake an error response by throwing an error Observable
        //return Observable.throw(new AppError());

        return this.http.delete(this.url + '/' + id)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            )
    }

    // the consumers of this service (PostComponent) should not be 
    // aware of this method
    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(new BadRequestError(error.json()));

        if (error.status === 404)
            return throwError(new NotFoundError());

        return throwError(new AppError(error));
    }
}