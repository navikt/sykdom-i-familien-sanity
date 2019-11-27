import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';

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
            fieldset: 'internal'
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'introduction'
        },
        {
            title: 'Ingress',
            name: 'ingress',
            type: 'localeRichText',
            fieldset: 'introduction'
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
        },
        {
            title: 'Relatert informasjon',
            name: 'related',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'link' } }]
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
