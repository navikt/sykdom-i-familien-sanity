import { validateLocaleString } from '../../utils/contentValidation';
import { blockContentField } from '../parts/blockContentField';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLanguage } from '../languages';

const ExpandableContent = {
    title: 'Ekspanderbart innhold',
    name: 'expandableContent',
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
            type: 'localeRichText',
            validation: (Rule) =>
                Rule.custom((obj) => {
                    return validateLocaleString(obj, true);
                })
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLanguage)
            };
        }
    }
};

export default ExpandableContent;
