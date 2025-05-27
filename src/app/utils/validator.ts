import { validationConditions } from '../static/validationConditions';

class Validator {
    isEmail(email: string) {
        return validationConditions.emailRegExp.test(email);
    }

    min(password: string) {
        return password.length >= validationConditions.minPasswordLength;
    }
}

export const validator = new Validator();
