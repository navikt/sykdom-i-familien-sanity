import supportedLocales from '../locales';
import link from '../richtext/annotations/link';
import pdfLink from '../richtext/annotations/pdfLink';

const LocaleRichText = {
    name: 'localeRichText',
    type: 'object',
    fieldsets: [
        {
            name: 'translations',
            title: 'Oversettelser',
            options: { collapsible: true },
        },
    ],
    fields: supportedLocales.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'array',
        of: [
            {
                type: 'block',
                marks: {
                    annotations: [link, pdfLink],
                },
                styles: [
                    {
                        title: 'Normal',
                        value: 'normal',
                    },
                    {
                        title: 'Tittel',
                        value: 'title',
                    },
                    {
                        title: 'Ingress',
                        value: 'ingress',
                    },
                    {
                        title: 'Checklist',
                        value: 'checklist',
                    },
                    {
                        title: 'Knapp',
                        value: 'button',
                    },
                ],
            },
        ],
        fieldset: lang.isDefault ? null : 'translations',
    })),
};

export default LocaleRichText;
