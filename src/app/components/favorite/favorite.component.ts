import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "favorite",
	templateUrl: "./favorite.component.html",
	styleUrls: ["./favorite.component.sass"]
})
export class FavoriteComponent {
	@Input("is-favorite") isFavorite: boolean;
	@Output("change") change = new EventEmitter();

	toggle() {
		this.isFavorite = !this.isFavorite ? true : false;
		this.change.emit({ newValue: this.isFavorite });
	}
}
