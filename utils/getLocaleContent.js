import { defaultLanguage } from '../schemas/languages';

export const getLocaleContent = (node) => {
    if (hasLocaleValue(node)) {
        return node[defaultLanguage];
    }
    return undefined;
};

export const hasLocaleValue = (node) => {
    return node !== undefined && node[defaultLanguage] !== undefined && node[defaultLanguage] !== '';
};
