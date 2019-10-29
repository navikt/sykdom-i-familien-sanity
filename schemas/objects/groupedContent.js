import { defaultLanguage } from '../languages';

const GroupedContent = {
    title: 'Gruppert innhold',
    name: 'groupedContent',
    type: 'document',
    fieldsets: [{ name: 'render', title: 'Presentasjon' }],
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString'
            // validation: (Rule) =>
            //     Rule.custom((obj) => {
            //         return validateLocaleString(obj, true);
            //     })
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
                title: props.title[defaultLanguage]
            };
        }
    }
};

export default GroupedContent;
