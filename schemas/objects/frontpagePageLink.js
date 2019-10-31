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
            to: { type: 'ytelsePage' },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText'
        },
        {
            title: 'Illustration',
            name: 'illustration',
            type: 'reference',
            to: [{ type: 'illustration' }]
        }
    ],
    preview: {
        select: { title: 'page.title' },
        prepare({ title }) {
            return {
                title: `${getLocaleContent(title)}`,
                subtitle: 'Lenke til underside'
            };
        }
    }
};

export default FrontpagePageLink;
