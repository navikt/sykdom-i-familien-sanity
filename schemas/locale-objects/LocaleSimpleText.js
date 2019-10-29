import supportedLanguages from '../languages';

const LocaleSimpleText = {
    name: 'localeSimpleText',
    type: 'object',
    fieldsets: [
        {
            title: 'Oversettelser',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    fields: supportedLanguages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'text',
        fieldset: lang.isDefault ? null : 'translations'
    }))
};

export default LocaleSimpleText;
