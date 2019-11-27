import { localeContentValidation } from '../../utils/contentValidation';
import { contentBlocks } from '../contentBlocks';

const SectionContentType = {
    title: 'Sideseksjon',
    name: 'section',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: localeContentValidation
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: { type: 'illustration' }
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
                title: props.title.nb
            };
        }
    }
};

export default SectionContentType;
