import { defaultLanguage } from '../schemas/languages';

export const validateLocaleString = (obj) => {
    if (obj === undefined || obj[defaultLanguage] === undefined || obj[defaultLanguage] === '') {
        return 'Påkrevd felt';
    }
    return true;
};

export const localeContentValidation = (Rule) =>
    Rule.custom((obj) => {
        return validateLocaleString(obj);
    });
