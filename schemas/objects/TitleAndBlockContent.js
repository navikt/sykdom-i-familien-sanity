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
            title: 'Ekstratittel (overstyrer innholdets tittel)',
            name: 'title',
            type: 'localeString',
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
            const { title: overrideTitle, content } = props;
            const title = hasLocaleValue(overrideTitle) ? overrideTitle : content.title;
            return {
                title: hasLocaleValue(title) ? title[defaultLanguage] : 'Uten tittel'
            };
        }
    }
};

export default titleAndBlockContent;
