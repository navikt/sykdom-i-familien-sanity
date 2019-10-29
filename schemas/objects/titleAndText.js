import { defaultLanguage } from '../languages';
import { getLocaleContent } from '../../utils/getLocaleContent';

const TitleAndText = {
    title: 'Tittel og tekst',
    name: 'titleAndText',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLanguage) || 'Uten tittel'
            };
        }
    }
};

export default TitleAndText;
