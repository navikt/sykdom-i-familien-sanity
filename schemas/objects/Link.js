import { defaultLocale } from '../locales';
import { getLocaleContent } from '../../utils/getLocaleContent';

const Link = {
    title: 'Lenke',
    name: 'link',
    type: 'document',
    fields: [
        {
            title: 'Lenketekst',
            name: 'text',
            type: 'localeString'
        },
        {
            title: 'Lenke',
            name: 'url',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'text',
            url: 'url'
        },
        prepare({ title, url }) {
            return {
                title: getLocaleContent(title, defaultLocale),
                subtitle: url
            };
        }
    }
};

export default Link;
