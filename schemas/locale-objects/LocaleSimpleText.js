import supportedLocales from '../locales';

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
    fields: supportedLocales.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'text',
        fieldset: lang.isDefault ? null : 'translations'
    }))
};

export default LocaleSimpleText;
