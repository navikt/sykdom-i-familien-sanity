import React from 'react';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';
import YtelsePageIcon from '../../components/icons/YtelsePageIcon';
import { siteField } from '../fields/siteField';

const SectionPage = {
    icon: YtelsePageIcon,
    title: 'Side med seksjoner og meny',
    name: 'sectionPage',
    type: 'document',
    fieldsets: [
        {
            name: 'internal',
            title: 'Oppsett',
            options: {
                collapsible: true,
            },
        },
        {
            name: 'inShort',
            title: 'Kort fortalt',
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
            title: 'slug',
            type: 'slug',
            name: 'slug',
            fieldset: 'internal',
            options: {
                source: 'title.nb',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'meta-description',
            description: 'Beskrivelse som dukker opp på blant annet google ved treff på denne siden',
            type: 'localeSimpleText',
            name: 'metadescription',
            fieldset: 'internal',
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
            title: 'Vis venstremeny',
            type: 'boolean',
            name: 'showLeftMenu',
            fieldset: 'internal',
            options: {
                layout: 'checkbox',
            },
        },
        {
            title: 'Sidetittel',
            name: 'title',
            type: 'localeString',
            validation: localeContentValidation,
            options: {
                collapsible: true,
            },
        },
        {
            title: 'Ingress',
            name: 'ingress',
            type: 'localeRichText',
            options: {
                collapsible: true,
            },
        },
        {
            title: 'Tittel - kort fortalt',
            name: 'inShortTitle',
            type: 'localeString',
            fieldset: 'inShort',
        },
        {
            title: 'Illustrasjon - kort fortalt',
            name: 'inShortIllustration',
            type: 'reference',
            fieldset: 'inShort',
            to: { type: 'illustration' },
        },
        {
            title: 'Innhold - kort fortalt',
            name: 'inShort',
            type: 'localeRichText',
            fieldset: 'inShort',
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [
                { type: 'section' },
                {
                    type: 'reference',
                    description: 'Inkluder innhold som allerede er registrert som egne dokumenter',
                    to: [{ type: 'message' }, { type: 'customComponent' }],
                    title: 'Referanse',
                },
            ],
        },
    ],
    preview: {
        select: { title: 'title', ytelse: 'ytelse', isPublic: 'isPublic', site: 'site' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title),
                subtitle: `${props.site || ''}${props.isPublic === false ? ' Kladd' : ''}`,
                media: <YtelsePageIcon isPublic={props.isPublic} />,
            };
        },
    },
};

export default SectionPage;
