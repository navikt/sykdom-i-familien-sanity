import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';

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
                collapsible: true
            }
        },
        {
            title: 'Tittel og ingress',
            name: 'introduction',
            options: {
                collapsible: true
            }
        }
    ],
    fields: [
        {
            title: 'Slug',
            type: 'slug',
            name: 'slug',
            description: 'Hva skal lenken til denne siden være',
            fieldset: 'internal',
            options: {
                source: 'title.nb'
            },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Meta-description',
            description: 'Beskrivelse som dukker opp på blant annet google ved treff på denne siden',
            type: 'localeSimpleText',
            name: 'metadescription',
            fieldset: 'internal',
            validation: localeContentValidation
        },
        {
            title: 'Vis språkvalg',
            type: 'boolean',
            name: 'showLanguageToggle',
            fieldset: 'internal',
            options: {
                layout: 'checkbox'
            }
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
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [{ type: 'textblock' }, { type: 'faq' }, { type: 'alertstripe' }]
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

export default CustomPage;
