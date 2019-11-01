import { getLocaleContent } from '../../utils/getLocaleContent';
import { validateLocaleString } from '../../utils/contentValidation';

const FrontpageLink = {
    title: 'Ekstern lenke',
    name: 'frontpageLink',
    type: 'object',
    fieldsets: [{ name: 'internal', title: 'Internt' }],
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
            type: 'localeRichText'
        },
        {
            title: 'Illustration',
            name: 'illustration',
            type: 'reference',
            to: [{ type: 'illustration' }]
        },
        { title: 'Lenke', name: 'url', type: 'url' }
    ],
    preview: {
        select: { title: 'title', url: 'url' },
        prepare({ title, url }) {
            return {
                title: `${getLocaleContent(title)}`,
                subtitle: `${url}`
            };
        }
    }
};

export default FrontpageLink;
