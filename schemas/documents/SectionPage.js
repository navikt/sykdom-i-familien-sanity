import React from 'react';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';
import { localeContentValidation } from '../../utils/contentValidation';
import YtelsePageIcon from '../../components/icons/YtelsePageIcon';

const SectionPage = {
    icon: YtelsePageIcon,
    title: 'Generell side med meny',
    name: 'sectionPage',
    type: 'document',
    fieldsets: [
        {
            name: 'internal',
            title: 'Oppsett',
            options: {
                collapsible: true
            }
        }
    ],
    fields: [
        {
            title: 'Sidetittel',
            name: 'title',
            type: 'localeString',
            fieldset: 'internal',
            validation: localeContentValidation
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
            fieldset: 'internal'
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
            title: 'Vis venstremeny',
            type: 'boolean',
            name: 'showLeftMenu',
            fieldset: 'internal',
            options: {
                layout: 'checkbox'
            }
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
                    title: 'Referanse'
                }
            ]
        }
    ],
    preview: {
        select: { title: 'title', isPublic: 'isPublic' },
        prepare(props) {
            return {
                title: getLocaleContent(props.title, defaultLocale),
                subtitle: props.isPublic === false ? 'Kladd' : undefined,
                media: <YtelsePageIcon isPublic={props.isPublic} />
            };
        }
    }
};

export default SectionPage;
