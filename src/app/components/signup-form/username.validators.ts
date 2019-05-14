import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') > -1)
            return { cannotContainSpace: true }

        return null;
    }

    //check whether username is used - Asynchronous validators
    static isUsed(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'kostas')
                    resolve({ isUsed: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}