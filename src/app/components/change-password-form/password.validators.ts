import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
	static validOldPassword(
		control: AbstractControl
	): Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// defines and accepts only 123456 as old password
				if (control.value != "123456")
					resolve({ validOldPassword: true });
				else resolve(null);
			}, 500);
		});
	}

	static passwordMatchValidator(control: AbstractControl) {
		return control.get("newPassword").value ===
			control.get("confirmPassword").value
			? null
			: { mismatch: true };
	}
}
