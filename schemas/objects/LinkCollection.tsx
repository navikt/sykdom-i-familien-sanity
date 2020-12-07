import { shortenText } from '../../utils/previewUtils';
import { getLocaleContent } from '../../utils/getLocaleContent';

const LinkCollection = {
    title: 'Lenkesamling',
    name: 'linkCollection',
    type: 'object',
    fieldsets: [
        { title: 'Tittel og tekst', name: 'intro', options: { collapsible: true } },
        { title: 'Lenker', name: 'links', options: { collapsible: false } },
    ],
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'intro',
        },
        {
            title: 'Ingress',
            name: 'ingress',
            type: 'localeRichText',
            fieldset: 'intro',
        },
        {
            title: 'Lenker',
            name: 'links',
            type: 'array',
            of: [{ type: 'frontpagePageLink' }, { type: 'frontpageLink' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            links: 'links',
        },
        prepare(props) {
            const title = getLocaleContent(props.title);

            return {
                title: shortenText(title),
                subtitle: 'Lenkesamling',
            };
        },
    },
};

export default LinkCollection;
