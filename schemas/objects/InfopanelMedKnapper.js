const InfopanelMedKnapperContentType = {
    title: 'Infopanel med knapper',
    name: 'infopanelMedKnapper',
    type: 'object',
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
            title: 'Link Knapper',
            name: 'linkKnapper',
            type: 'array',
            of: [{type: 'link'}]
        }
    ],
    preview: {
        select: { tittel: 'title'},
        prepare(props) {
            return {
                title: "Infopanel med knapper",
                subtitle: props.tittel.nb
            }
        }

    }
};

export default InfopanelMedKnapperContentType