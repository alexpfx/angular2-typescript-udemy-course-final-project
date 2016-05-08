import {Control} from "angular2/common";
export class EmailValidators {
    static validateEmail(control:Control) {
        if (control.value == null) {
            return null;
        }

        var re = /\S+@\S+\.\S+/;

        
        var valid = re.test(control.value);
        console.log(valid);
        if (!valid) {
            return {shouldBeValid: true}
        }
        return null;
    }

}