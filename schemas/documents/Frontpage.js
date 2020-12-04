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
            title: 'Om siden',
            name: 'internal',
            options: {
                collapsible: true,
            },
        },
        { title: 'Banner', name: 'banner', options: { collapsible: true } },
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
            title: 'Tilgjengelig på nav.no',
            type: 'boolean',
            name: 'isPublic',
            fieldset: 'internal',
            options: {
                layout: 'checkbox',
            },
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
            fieldset: 'banner',
            validation: localeContentValidation,
        },

        {
            title: 'Tekst under tittel',
            name: 'ingress',
            type: 'localeRichText',
            fieldset: 'banner',
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            fieldset: 'banner',
            to: [{ type: 'illustration' }],
        },
        {
            title: 'Innhold over innganger',
            name: 'content',
            type: 'array',
            of: [{ type: 'textblock' }, { type: 'reference', title: 'Melding', to: [{ type: 'message' }] }],
        },
        {
            title: 'Innganger til undersider',
            name: 'frontpageStories',
            type: 'array',
            description: 'Lenkepaneler - øverste gruppe',
            of: [{ type: 'frontpagePageLink' }, { type: 'frontpageLink' }],
        },
        {
            title: 'Andre lenker',
            name: 'frontpageLinks',
            type: 'array',
            description: 'Lenkepaneler - nederste gruppe. Lenker som går til sider utenfor sykdom i familien',
            of: [{ type: 'frontpageLink' }],
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
