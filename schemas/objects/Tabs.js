import { defaultLocale } from '../locales';

const Tabs = {
    title: 'Faner',
    name: 'tabs',
    type: 'object',
    fieldsets: [{ name: 'render', title: 'Visning', options: { collapsible: true } }],
    fields: [
        {
            title: 'Tittel',
            description: 'Valgfri. Vises kun på små skjermer og når visningen er satt til Nedtrekksliste',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Enkeltfaner',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'tab'
                }
            ]
        },
        {
            title: 'Hvordan skal informasjonen vises',
            name: 'presentation',
            type: 'string',
            fieldset: 'render',
            options: {
                layout: 'select',
                list: [{ value: 'tabs', title: 'Faner' }, { value: 'dropdown', title: 'Nedtrekksliste' }]
            }
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: props.title[defaultLocale],
                subtitle: 'Faner'
            };
        }
    }
};

export default Tabs;
