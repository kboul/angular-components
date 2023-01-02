import { UsernameValidators } from "./username.validators";
import { Component } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";

@Component({
	selector: "signup-form",
	templateUrl: "./signup-form.component.html",
	styleUrls: ["./signup-form.component.sass"]
})
export class SignupFormComponent {
	form = new UntypedFormGroup({
		username: new UntypedFormControl(
			"",
			[
				Validators.required,
				Validators.minLength(3),
				UsernameValidators.cannotContainSpace
			],
			UsernameValidators.isUsed
		),
		password: new UntypedFormControl("", Validators.required)
	});

	login() {
		this.form.setErrors({
			invalidLogin: true
		});
	}

	get username() {
		return this.form.get("username");
	}
}
