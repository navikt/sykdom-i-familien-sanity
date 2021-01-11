import { getLocaleContent } from '../../utils/getLocaleContent';
import { localeContentValidation } from '../../utils/contentValidation';
import { siteField } from '../fields/siteField';

const CustomPage = {
    title: 'Generell side',
    name: 'customPage',
    type: 'document',
    id: 'customPage',
    fieldsets: [
        {
            name: 'internal',
            title: 'Metadata',
            options: {
                collapsible: true,
            },
        },
        {
            title: 'Tittel og ingress',
            name: 'introduction',
            options: {
                collapsible: true,
            },
        },
        {
            title: 'Tilbake-lenke',
            description: 'Valgfri. Velg en side for at en "Tilbake til"-lenke skal vises øverst på siden.',
            name: 'parentPage',
            options: {
                collapsible: true,
            },
        },
    ],
    fields: [
        {
            ...siteField,
            fieldset: 'internal',
        },
        {
            title: 'Slug',
            type: 'slug',
            name: 'slug',
            description: 'Hva skal lenken til denne siden være',
            fieldset: 'internal',
            options: {
                source: 'title.nb',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Meta-description',
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
            title: 'Side',
            description: 'Velg side det skal lenkes til.',
            name: 'parentPage_page',
            type: 'reference',
            fieldset: 'parentPage',
            to: [{ type: 'ytelsePage' }, { type: 'sectionPage' }],
        },
        {
            title: 'Lenketekst',
            description:
                'Velg tekst som skal brukes. Dersom feltet er tomt, brukes teksten "Tilbake til [sidenavn]", hvor sidenavn er tittel i siden det lenkes til.',
            name: 'parentPage_linkText',
            type: 'localeString',
            fieldset: 'parentPage',
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: { type: 'illustration' },
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [{ type: 'textblock' }, { type: 'faq' }, { type: 'alertstripe' }],
        },
    ],
    preview: {
        select: { title: 'title', ytelse: 'ytelse', site: 'site' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title),
                subtitle: props.site,
            };
        },
    },
};

export default CustomPage;
