import { defaultLocale } from '../locales';
import { getLocaleContent, hasLocaleValue } from '../../utils/getLocaleContent';

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
    fields: [
        {
            title: 'Tittel (valgfri)',
            name: 'title',
            type: 'optionalLocaleTitle'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText'
        }
    ],
    preview: {
        select: {
            title: 'title',
            content: 'content'
        },
        prepare(props) {
            const title = hasLocaleValue(props.title)
                ? getLocaleContent(props.title, defaultLocale)
                : toPlainText(getLocaleContent(props.content, defaultLocale));
            return {
                title: shortenText(title) || 'Uten tittel'
            };
        }
    }
};

export default TitleAndText;
