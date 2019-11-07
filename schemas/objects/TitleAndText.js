import { defaultLocale } from '../locales';
import { getLocaleContent, hasLocaleValue } from '../../utils/getLocaleContent';

const LAYOUTS = {
    normal: 'normal',
    expandablePanel: 'expandablePanel'
};

const shortenText = (text) => {
    if (text && typeof text === 'string' && text.length > 28) {
        return `${text.substr(0, 25)}...`;
    }
    return text;
};
function toPlainText(blocks = []) {
    return (
        blocks
            // loop through each block
            .map((block) => {
                // if it's not a text block with children,
                // return nothing
                if (block._type !== 'block' || !block.children) {
                    return '';
                }
                // loop through the children spans, and join the
                // text strings
                return block.children.map((child) => child.text).join('');
            })
            // join the parapgraphs leaving split by two linebreaks
            .join('\n\n')
    );
}

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
