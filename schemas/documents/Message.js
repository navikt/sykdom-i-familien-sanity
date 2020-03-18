import React from 'react';
import { localeContentValidation } from '../../utils/contentValidation';
import { hasLocaleValue } from '../../utils/getLocaleContent';
import { toPlainText, shortenText } from '../../utils/previewUtils';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';

const STYLES = {
    info: 'info',
    advarsel: 'advarsel',
    feil: 'feil'
};

const Message = {
    title: 'Melding',
    name: 'message',
    type: 'document',
    fields: [
        {
            title: 'Navn (kun internt)',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Tittel (valgfri)',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText',
            validation: localeContentValidation
        },
        {
            title: 'Type melding',
            name: 'style',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Info (blå)', value: STYLES.info },
                    { title: 'Advarsel (gul)', value: STYLES.advarsel },
                    { title: 'Alvorlig (rød)', value: STYLES.feil }
                ]
            },
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: {
            name: 'name',
            title: 'title',
            style: 'style',
            content: 'content'
        },
        prepare(props) {
            const hasTitle = hasLocaleValue(props.title);
            const navn = props.name ? `${props.name}. ` : '';
            const subtitle = `${navn}(${props.style})`;

            const title = hasTitle
                ? getLocaleContent(props.title, defaultLocale)
                : toPlainText(getLocaleContent(props.content, defaultLocale));

            if (hasTitle) {
                return {
                    title: shortenText(title),
                    subtitle
                };
            }
            return {
                title: shortenText(title) || 'Uten tittel',
                subtitle
            };
        }
    }
};
export default Message;
