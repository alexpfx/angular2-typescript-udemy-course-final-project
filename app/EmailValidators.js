System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.validateEmail = function (control) {
                    if (control.value == null) {
                        return null;
                    }
                    var re = /\S+@\S+\.\S+/;
                    var valid = re.test(control.value);
                    console.log(valid);
                    if (!valid) {
                        return { shouldBeValid: true };
                    }
                    return null;
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=EmailValidators.js.map