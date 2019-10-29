import { defaultLanguage } from '../languages';
import { hasLocaleValue } from '../../utils/getLocaleContent';

const titleAndBlockContent = {
    title: 'Innhold',
    name: 'titleAndBlockContent',
    type: 'object',
    fieldsets: [{ name: 'setup', title: 'Oppsett' }],
    fields: [
        {
            title: 'Illustrasjon',
            name: 'tabIllustration',
            type: 'reference',
            to: [
                {
                    type: 'illustration'
                }
            ],
            fieldset: 'setup'
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'title',
            content: 'content'
        },
        prepare(props) {
            return {
                title: hasLocaleValue(props.content.title) ? props.content.title[defaultLanguage] : 'Uten tittel'
            };
        }
    }
};

export default titleAndBlockContent;
