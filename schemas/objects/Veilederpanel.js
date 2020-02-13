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
            title: 'Type',
            name: 'veiledertype',
            type: 'string',
            fieldset: 'veileder',
            description:
                'For å få Rasmus med checkpunkter, velg Rasmus som type. Skriv deretter alt innholde i feltet over, og bruk listestil på det som skal være punkter. For å endre punktene til å bli checkpunkter, marker all teksten i punktene og velg [Checklist] i layout-dropdown til venstre over tekstboksen.',
            options: {
                layout: 'list',
                list: [
                    { value: 'normal', title: 'NAV-veileder - ramme' },
                    { value: 'temafarge', title: 'NAV-veileder - farget bakgrunn' },
                    { value: 'rasmus', title: 'Rasmus' }
                ]
            }
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
                list: [
                    { value: 'normal', title: 'Normal' },
                    { value: 'plakat', title: 'Plakat' }
                ]
            }
        },
        {
            title: 'Kompakt',
            name: 'kompakt',
            type: 'string',
            fieldset: 'veileder',
            options: {
                layout: 'select',
                list: [
                    { value: 'kompakt', title: 'Kompakt' },
                    { value: 'normal', title: 'Normal' }
                ]
            }
        }
    ],
    preview: {
        select: { content: 'content', type: 'veiledertype', kompakt: 'kompakt', ansikt: 'face' },
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
                subtitle: subtitle.length > 0 ? `Veilederpanel (${subtitle.join(', ')})` : 'Veilederpanel'
            };
        }
    }
};

export default Veilederpanel;
