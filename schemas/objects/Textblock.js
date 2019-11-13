import { defaultLocale } from '../locales';
import { getLocaleContent, hasLocaleValue } from '../../utils/getLocaleContent';
import { toPlainText, shortenText } from '../../utils/previewUtils';

const LAYOUTS = {
    normal: 'normal',
    expandablePanel: 'expandablePanel'
};

const Textblock = {
    title: 'Tekstblokk',
    name: 'textblock',
    type: 'object',
    fieldsets: [{ name: 'layout', title: 'Visning', options: { collapsible: true } }],
    fields: [
        {
            title: 'Tittel',
            description: 'Valgfri, men bør settes dersom en velger å vise innholdet som ekspanderbart panel.',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText'
        },
        {
            title: 'Hvordan skal innholdet vises?',
            description:
                'Ekspanderbart panel krever at en setter en tittel. Dersom ikke, vises teksten som en vanlig tekstblokk',
            name: 'layout',
            fieldset: 'layout',
            type: 'string',
            options: {
                layout: 'list',
                list: [
                    { title: 'Vanlig tekstblokk', value: 'normal' },
                    { title: 'Ingress', value: 'ingress' },
                    { title: 'Ekspanderbart panel', value: 'expandablePanel' }
                ]
            }
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
                subtitle: hasTitle ? `Tittel og tekst` : 'Tekst uten tittel'
            };
        }
    }
};

export default Textblock;
