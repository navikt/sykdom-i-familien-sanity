import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';
import YtelsePageIcon from '../../components/YtelsePageIcon';
import React from 'react';

const YtelsePage = {
    icon: YtelsePageIcon,
    title: 'Faktaside',
    name: 'ytelsePage',
    type: 'document',
    fieldsets: [
        {
            name: 'internal',
            title: 'Oppsett',
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
            },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'meta-description',
            description: 'Beskrivelse som dukker opp på blant annet google ved treff på denne siden',
            type: 'localeSimpleText',
            name: 'metadescription',
            fieldset: 'internal',
            validation: localeContentValidation
        },
        {
            title: 'Tilgjengelig på nav.no',
            type: 'boolean',
            name: 'isPublic',
            fieldset: 'internal',
            options: {
                layout: 'checkbox'
            }
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
            title: 'Ekstra komponenter',
            name: 'inShortEkstraKomponenter',
            type: 'array',
            fieldset: 'inShort',
            of: [{type: 'infopanelMedKnapper'}, {type: 'textblock'}]
        },
        {
            title: 'Sideseksjoner',
            name: 'content',
            type: 'array',
            of: [{ type: 'section' }]
        }
    ],
    preview: {
        select: { title: 'title', ytelse: 'ytelse', isPublic: 'isPublic' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale),
                subtitle: props.isPublic === false ? 'Kladd' : undefined,
                media: <YtelsePageIcon isPublic={props.isPublic} />
            };
        }
    }
};

export default YtelsePage;
