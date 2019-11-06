import { defaultLocale } from '../locales';

const GroupedContent = {
    title: 'Gruppert innhold',
    name: 'groupedContent',
    type: 'object',
    fieldsets: [{ name: 'render', title: 'Presentasjon' }],
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Hvordan skal informasjonen vises',
            name: 'presentation',
            type: 'string',
            fieldset: 'render',
            options: {
                layout: 'radio',
                list: [{ value: 'tabs', title: 'Faner' }, { value: 'dropdown', title: 'Nedtrekksliste' }]
            }
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'titleAndBlockContent'
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
                subtitle: 'Gruppert innhold'
            };
        }
    }
};

export default GroupedContent;
