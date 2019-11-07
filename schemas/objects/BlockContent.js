import { getLocaleContent } from '../../utils/getLocaleContent';
import { validateLocaleString } from '../../utils/contentValidation';

const BlockContent = {
    title: 'Innhold',
    name: 'blockContent',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: (Rule) =>
                Rule.custom((obj) => {
                    return validateLocaleString(obj, true);
                })
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [
                { type: 'titleAndText' },
                { type: 'expandableContent' },
                {
                    type: 'illustration'
                },
                { type: 'groupedContent' },
                { type: 'veilederpanel' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: getLocaleContent(props.title)
            };
        }
    }
};

export default BlockContent;
