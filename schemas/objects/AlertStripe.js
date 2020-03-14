import { defaultLocale } from '../locales';
import { getLocaleContent, hasLocaleValue } from '../../utils/getLocaleContent';
import { toPlainText, shortenText } from '../../utils/previewUtils';
import { localeContentValidation } from '../../utils/contentValidation';

const STYLES = {
    info: 'info',
    advarsel: 'advarsel',
    feil: 'feil'
};

const AlertStripe = {
    title: 'Melding',
    name: 'alertstripe',
    type: 'object',
    fields: [
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
                layout: 'list',
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
            title: 'title',
            style: 'style',
            content: 'content'
        },
        prepare(props) {
            const hasTitle = hasLocaleValue(props.title);
            const title = hasTitle
                ? getLocaleContent(props.title, defaultLocale)
                : toPlainText(getLocaleContent(props.content, defaultLocale));

            if (hasTitle) {
                return {
                    title: shortenText(title),
                    subtitle: `Type: ${props.style}`
                };
            }
            return {
                title: shortenText(title) || 'Uten tittel',
                subtitle: `Type: ${props.style}`
            };
        }
    }
};

export default AlertStripe;
