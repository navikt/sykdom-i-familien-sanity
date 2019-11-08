import { defaultLocale } from '../locales';

const Tabs = {
    title: 'Faner',
    name: 'tabs',
    type: 'object',
    fieldsets: [{ name: 'render', title: 'Visningsform' }],
    fields: [
        {
            title: 'Tittel',
            description: 'Synlig når fanene vises som nedtrekksliste.',
            name: 'title',
            type: 'localeString'
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
