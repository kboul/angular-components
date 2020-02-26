import { Component, Input } from "@angular/core";

@Component({
	selector: "zippy",
	templateUrl: "./zippy.component.html",
	styleUrls: ["./zippy.component.sass"]
})
export class ZippyComponent {
	@Input() title: string;
	isExpanded: boolean = false;

	onClick() {
		this.isExpanded = !this.isExpanded;
	}
}
