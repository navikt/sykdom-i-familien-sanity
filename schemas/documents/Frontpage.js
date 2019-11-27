import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';

const Frontpage = {
    title: 'Forside',
    name: 'frontpage',
    type: 'document',
    id: 'forside',
    fieldsets: [
        {
            name: 'internal',
            title: 'Metadata',
            options: {
                collapsible: true
            }
        },
        { title: 'Introduksjon', name: 'introduction' }
    ],
    fields: [
        {
            title: 'meta-description',
            description: 'Beskrivelse som dukker opp på blant annet google ved treff på denne siden',
            type: 'localeSimpleText',
            name: 'metadescription',
            fieldset: 'internal',
            validation: localeContentValidation
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'introduction',
            validation: localeContentValidation
        },
        {
            title: 'Ingress',
            name: 'ingress',
            type: 'localeRichText',
            fieldset: 'introduction',
            validation: localeContentValidation
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: [{ type: 'illustration' }]
        },
        {
            title: 'Innganger',
            name: 'frontpageStories',
            type: 'array',
            of: [{ type: 'frontpagePageLink' }, { type: 'frontpageLink' }]
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

export default Frontpage;
