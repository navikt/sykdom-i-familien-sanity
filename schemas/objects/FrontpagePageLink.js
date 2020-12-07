import { getLocaleContent } from '../../utils/getLocaleContent';

const FrontpagePageLink = {
    title: 'Lenke til underside',
    name: 'frontpagePageLink',
    type: 'object',
    fieldsets: [{ name: 'internal', title: 'Internt' }],
    fields: [
        {
            title: 'Side',
            name: 'page',
            type: 'reference',
            fieldset: 'internal',
            to: [{ type: 'ytelsePage' }, { type: 'sectionPage' }, { type: 'customPage' }],
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Tittel',
            description: 'Dersom denne er blank, brukes tittel på siden det lenkes til.',
            name: 'title',
            type: 'localeString',
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText',
        },
        {
            title: 'Illustration',
            name: 'illustration',
            type: 'reference',
            to: [{ type: 'illustration' }],
        },
    ],
    preview: {
        select: { title: 'page.title', site: 'page.site' },
        prepare({ title, site }) {
            return {
                title: `${site}: ${getLocaleContent(title)}`,
                subtitle: 'Lenke til underside',
            };
        },
    },
};

export default FrontpagePageLink;
