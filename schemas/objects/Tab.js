import { getLocaleContent } from '../../utils/getLocaleContent';
import { contentBlocks } from '../contentBlocks';

const Tab = {
    title: 'Fane',
    name: 'tab',
    type: 'object',
    fields: [
        {
            title: 'Fanetekst',
            name: 'title',
            type: 'localeString',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Illustrasjon',
            name: 'tabIllustration',
            type: 'reference',
            to: [
                {
                    type: 'illustration'
                }
            ]
        },
        {
            title: 'Innholdstittel',
            name: 'contentTitle',
            type: 'localeString'
        },
        {
            title: 'Innholdsblokker',
            name: 'content',
            type: 'array',
            of: contentBlocks
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

export default Tab;
