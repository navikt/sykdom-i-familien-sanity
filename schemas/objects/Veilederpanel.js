import { getLocaleContent } from '../../utils/getLocaleContent';
import { toPlainText } from '../../utils/previewUtils';
import { defaultLocale } from '../locales';

const Veilederpanel = {
    title: 'Veilederpanel',
    name: 'veilederpanel',
    type: 'object',
    fieldsets: [{ name: 'veileder', title: 'Visning', options: { collapsible: true } }],
    fields: [
        {
            title: 'Innhold',
            name: 'content',
            type: 'localeRichText'
        },
        {
            title: 'Ansikt',
            name: 'face',
            type: 'string',
            fieldset: 'veileder',
            options: {
                layout: 'list',
                list: [
                    { value: 'glad', title: 'Glad' },
                    { value: 'undrende', title: 'Undrende' },
                    { value: 'skeptisk', title: 'Skeptisk' }
                ]
            }
        },
        {
            title: 'Fargetema',
            name: 'color',
            type: 'string',
            fieldset: 'veileder',
            options: {
                layout: 'list',
                list: [
                    { value: 'normal', title: 'Normal' },
                    { value: 'suksess', title: 'Suksess' },
                    { value: 'advarsel', title: 'Advarsel' },
                    { value: 'feilmelding', title: 'Feilmelding' }
                ]
            }
        },
        {
            title: 'Type',
            name: 'type',
            type: 'string',
            fieldset: 'veileder',
            options: {
                layout: 'select',
                list: [{ value: 'normal', title: 'Normal' }, { value: 'plakat', title: 'Plakat' }]
            }
        },
        {
            title: 'Kompakt',
            name: 'kompakt',
            type: 'string',
            fieldset: 'veileder',
            options: {
                layout: 'select',
                list: [{ value: 'kompakt', title: 'Kompakt' }, { value: 'normal', title: 'Normal' }]
            }
        }
    ],
    preview: {
        select: { content: 'content', type: 'type', kompakt: 'kompakt', ansikt: 'face' },
        prepare(props) {
            const subtitle = [];
            if (props.type) {
                subtitle.push(props.type);
            }
            if (props.kompakt) {
                subtitle.push('kompakt');
            }
            if (props.ansikt) {
                subtitle.push(props.ansikt);
            }
            return {
                title: toPlainText(getLocaleContent(props.content, defaultLocale)),
                subtitle: subtitle.length > 0 ? `Veilederpanel (${subtitle.join(', ')}` : 'Veilederpanel'
            };
        }
    }
};

export default Veilederpanel;
