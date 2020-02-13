import supportedLocales from '../locales';

const LocaleRichText = {
    name: 'localeRichBulletList',
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
        of: [
            {
                type: 'block',
                styles: [],
                marks: {
                    decorators: [{ title: 'Strong', value: 'strong' }],
                    annotations: []
                },
                lists: [{ title: 'Bullet', value: 'bullet' }]
            }
        ],
        fieldset: lang.isDefault ? null : 'translations'
    }))
};

export default LocaleRichText;
