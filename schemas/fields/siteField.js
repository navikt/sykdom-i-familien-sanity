import SITES from '../../sites';

export const siteField = {
    title: 'Site',
    name: 'site',
    type: 'string',
    options: {
        layout: 'radio',
        list: [
            { title: SITES.sif.title, value: SITES.sif.id },
            { title: SITES.arbeidsgiver.title, value: SITES.arbeidsgiver.id },
            { title: SITES.samarbeid.title, value: SITES.samarbeid.id },
        ],
    },
    validation: (Rule) => Rule.required(),
};
