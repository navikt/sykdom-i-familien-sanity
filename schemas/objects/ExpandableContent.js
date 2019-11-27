import { localeContentValidation } from '../../utils/contentValidation';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';

const ExpandableContent = {
    title: 'Ekspanderbart innhold',
    name: 'expandableContent',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: localeContentValidation
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText',
            validation: localeContentValidation
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale),
                subtitle: 'Ekspanderbart innhold'
            };
        }
    }
};

export default ExpandableContent;
