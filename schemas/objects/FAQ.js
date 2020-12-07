import { defaultLocale } from '../locales';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { shortenText } from '../../utils/previewUtils';

const FAQ = {
    title: 'Spørsmål og svar',
    name: 'faq',
    type: 'object',
    fields: [
        {
            title: 'Spørsmål',
            name: 'title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Svar',
            name: 'content',
            type: 'localeRichText',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            layout: 'layout',
            content: 'content',
        },
        prepare(props) {
            const title = getLocaleContent(props.title);

            return {
                title: shortenText(title),
                subtitle: 'Spørsmål og svar',
            };
        },
    },
};

export default FAQ;
