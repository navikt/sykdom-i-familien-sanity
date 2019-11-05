import supportedLocales from '../locales';

const LocaleRichText = {
    name: 'localeRichText',
    type: 'object',
    fieldsets: [
        {
            name: 'translations',
            title: 'Oversettelser',
            options: { collapsible: true }
        }
    ],
    fields: supportedLocales.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'array',
        of: [{ type: 'block' }],
        fieldset: lang.isDefault ? null : 'translations'
    }))
};

export default LocaleRichText;
