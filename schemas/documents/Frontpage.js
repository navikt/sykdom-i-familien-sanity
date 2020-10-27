import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';
import { siteField } from '../fields/siteField';

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
                collapsible: true,
            },
        },
        { title: 'Introduksjon', name: 'introduction' },
    ],
    fields: [
        {
            ...siteField,
            fieldset: 'internal',
        },
        {
            title: 'meta-description',
            description: 'Beskrivelse som dukker opp på blant annet google ved treff på denne siden',
            type: 'localeSimpleText',
            name: 'metadescription',
            fieldset: 'internal',
            validation: localeContentValidation,
        },
        {
            title: 'Vis språkvalg',
            type: 'boolean',
            name: 'showLanguageToggle',
            fieldset: 'internal',
            options: {
                layout: 'checkbox',
            },
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'introduction',
            validation: localeContentValidation,
        },
        {
            title: 'Ingress',
            name: 'ingress',
            type: 'localeRichText',
            fieldset: 'introduction',
            validation: localeContentValidation,
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: [{ type: 'illustration' }],
        },
        {
            title: 'Melding',
            name: 'message',
            type: 'reference',
            to: [{ type: 'message' }],
        },
        {
            title: 'Innganger',
            name: 'frontpageStories',
            type: 'array',
            of: [{ type: 'frontpagePageLink' }, { type: 'frontpageLink' }],
        },
    ],
    preview: {
        select: { title: 'title', ytelse: 'ytelse' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale),
            };
        },
    },
};

export default Frontpage;
