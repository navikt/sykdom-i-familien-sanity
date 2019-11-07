import { defaultLocale } from '../locales';
import { getLocaleContent, hasLocaleValue } from '../../utils/getLocaleContent';
import { toPlainText, shortenText } from '../../utils/previewUtils';

const LAYOUTS = {
    normal: 'normal',
    expandablePanel: 'expandablePanel'
};

const TitleAndText = {
    title: 'Tekstblokk',
    name: 'titleAndText',
    type: 'object',
    fieldsets: [{ name: 'layout', title: 'Layout' }, { name: 'content', title: 'Innhold' }],
    fields: [
        {
            title: 'Hvordan skal innholdet vises?',
            name: 'layout',
            fieldset: 'layout',
            type: 'string',
            options: {
                layout: 'list',
                list: [
                    { title: 'Vanlig tekstblokk', value: 'normal' },
                    { title: 'Ekspanderbart panel', value: 'expandablePanel' }
                ]
            }
        },
        {
            title: 'Tittel (valgfri ved vanlig tekstblokk)',
            name: 'title',
            type: 'localeString',
            fieldset: 'content'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText',
            fieldset: 'content'
        }
    ],
    preview: {
        select: {
            title: 'title',
            layout: 'layout',
            content: 'content'
        },
        prepare(props) {
            const hasTitle = hasLocaleValue(props.title);
            const title = hasTitle
                ? getLocaleContent(props.title, defaultLocale)
                : toPlainText(getLocaleContent(props.content, defaultLocale));

            if (props.layout === LAYOUTS.expandablePanel) {
                if (hasTitle) {
                    return {
                        title: shortenText(title),
                        subtitle: 'Tekstblokk (ekspanderbart panel)'
                    };
                }
                return {
                    title: shortenText(title) || 'Uten tittel',
                    subtitle: 'Tekstblokk (vises vanlig pga ingen tittel)'
                };
            }
            return {
                title: shortenText(title) || 'Uten tittel',
                subtitle: hasTitle ? `Tittel og tekst` : 'Tekstblokk'
            };
        }
    }
};

export default TitleAndText;
