import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';

const YtelsePage = {
    title: 'Faktaside',
    name: 'ytelsePage',
    type: 'document',
    fieldsets: [{ name: 'internal', title: 'Internt' }, { name: 'intro', title: 'Introduksjon' }],
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
            options: {
                source: 'title.nb'
            }
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'intro',
            validation: localeContentValidation
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            fieldset: 'intro',
            to: { type: 'illustration' }
        },
        {
            title: 'Kort fortalt',
            name: 'inShort',
            fieldset: 'intro',
            type: 'localeRichText',
            validation: localeContentValidation
        },
        {
            title: 'Innholdsseksjoner',
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
