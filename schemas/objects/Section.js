import { validateLocaleString } from '../../utils/contentValidation';

const SectionContentType = {
    title: 'Seksjon',
    name: 'section',
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
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: { type: 'illustration' }
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [
                { type: 'titleAndText' },
                {
                    type: 'illustration'
                },
                { type: 'groupedContent' },
                { type: 'expandableContent' }
            ]
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
