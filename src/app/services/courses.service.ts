import { Courses } from '../model/courses';

export class CoursesService {
    getCourses(): Array<Courses> {
        return [
            { id: 1, name: "course1" },
            { id: 2, name: "course2" },
            { id: 3, name: "course3" }
        ];
    }
}