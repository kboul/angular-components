import { Component, Input } from "@angular/core";

@Component({
	selector: "zippy",
	templateUrl: "./zippy.component.html",
	styleUrls: ["./zippy.component.sass"]
})
export class ZippyComponent {
	@Input() title: string;
	@Input() id: string;

	openAccordion = { ship: true, bill: false };
}
