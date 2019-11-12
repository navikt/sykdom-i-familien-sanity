import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';

const YtelsePage = {
    title: 'Faktaside',
    name: 'ytelsePage',
    type: 'document',
    fieldsets: [
        {
            name: 'internal',
            title: 'Ytelse og url',
            options: {
                collapsible: true
            }
        },
        {
            name: 'banner',
            title: 'Sidetopp',
            options: {
                collapsible: true
            }
        },
        {
            name: 'inShort',
            title: 'Kort fortalt',
            options: {
                collapsible: true
            }
        }
    ],
    fields: [
        {
            title: 'Ytelse',
            name: 'ytelse',
            type: 'reference',
            fieldset: 'internal',
            to: { type: 'ytelse' },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'slug',
            type: 'slug',
            name: 'slug',
            fieldset: 'internal',
            options: {
                source: 'title.nb'
            }
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'banner',
            validation: localeContentValidation
        },
        {
            title: 'Introtekst',
            name: 'intro',
            type: 'localeRichText',
            fieldset: 'banner',
            validation: localeContentValidation
        },
        {
            title: 'Bannerillustrasjon',
            name: 'banner',
            type: 'reference',
            fieldset: 'banner',
            to: { type: 'illustration' }
        },
        {
            title: 'Tittel',
            name: 'inShortTitle',
            type: 'localeString',
            fieldset: 'inShort',
            validation: localeContentValidation
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            fieldset: 'inShort',
            to: { type: 'illustration' }
        },
        {
            title: 'Innhold',
            name: 'inShort',
            fieldset: 'inShort',
            type: 'localeRichText',
            validation: localeContentValidation
        },
        {
            title: 'Sideseksjoner',
            name: 'content',
            type: 'array',
            of: [{ type: 'section' }]
        }
    ],
    preview: {
        select: { title: 'title', ytelse: 'ytelse' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale)
            };
        }
    }
};

export default YtelsePage;
