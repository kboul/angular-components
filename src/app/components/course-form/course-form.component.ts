import { Component } from "@angular/core";

@Component({
	selector: "course-form",
	templateUrl: "./course-form.component.html",
	styleUrls: ["./course-form.component.sass"]
})
export class CourseFormComponent {
	categories = [
		{ id: 1, name: "Development" },
		{ id: 2, name: "Art" },
		{ id: 3, name: "Languages" }
	];

	create(f) {
		console.log(f.value);
	}
}
