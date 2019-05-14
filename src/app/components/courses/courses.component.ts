import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Courses } from '../../models/courses';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.sass']
})

export class CoursesComponent {

    name: string = "";

    title: string = "List of courses";
    courses: Array<Courses>;
    isActive: boolean = false;

    log($event: Event): void {
        console.log("Message Logged!", $event);
    }

    email: string = "kos.voulgaridis@gmail.com";

    onKeyUp() {
        console.log(this.email);
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text: string = 'Very very very very very very very very very very very very long text...';

    //decouple courses component from courses service - we do not use new CoursesService()
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    extraCourses: Array<Courses>;

    loadExtraCourses() {
        this.extraCourses = [
            { id: 4, name: "course4" },
            { id: 5, name: "course5" },
            { id: 6, name: "course6" }
        ];
    }

    trackExtraCourse(course: Courses): number { //course object
        return course ? course.id : undefined;
    }
}