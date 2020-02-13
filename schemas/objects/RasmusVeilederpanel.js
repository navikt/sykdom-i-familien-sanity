import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';

const RasmusVeilederpanel = {
    title: 'Rasmus veilederpanel',
    name: 'rasmusVeilederpanel',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichBulletList',
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: { content: 'content', title: 'title' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale)
            };
        }
    }
};

export default RasmusVeilederpanel;
