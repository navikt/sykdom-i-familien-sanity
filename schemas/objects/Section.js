import { localeContentValidation } from '../../utils/contentValidation';
import { contentBlocks } from '../contentBlocks';

const getSourceForSlug = (item) => {
    if (item && item.parent && item.parent.title) {
        return item.parent.title.nb || '';
    }
};

const SectionContentType = {
    title: 'Sideseksjon',
    name: 'section',
    type: 'object',
    fieldsets: [
        {
            name: 'extra',
            title: 'Ekstrainformasjon',
            options: {
                collapsible: true
            }
        }
    ],

    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: localeContentValidation
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: { type: 'illustration' }
        },
        {
            title: 'Innholdsblokker',
            name: 'content',
            type: 'array',
            of: contentBlocks
        },
        {
            title: 'SeksjonsID',
            description:
                'Unik ID for denne seksjonen som brukes når en ønsker å lenke direkte til en seksjon. Dersom feltet er tomt, lages det automatisk en ID basert på tittelen - utfordringen med dette er at lenker til seksjonen vil slutte å virke dersom en endrer tittelen.',
            name: 'slug',
            type: 'slug',
            fieldset: 'extra',
            options: {
                source: (doc, item) => getSourceForSlug(item)
            }
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(props) {
            return {
                title: props.title.nb
            };
        }
    }
};

export default SectionContentType;
