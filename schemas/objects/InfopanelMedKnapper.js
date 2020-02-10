const InfopanelMedKnapperContentType = {
    title: 'Infopanel med knapper',
    name: 'infopanelMedKnapper',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
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
            of: [{type: 'link'}],
            validation: Rule => Rule.required().max(2)
        }
    ],
    preview: {
        select: { title: 'title'},
        prepare(props) {
            return {
                title: "Infopanel med knapper",
                subtitle: props.title.nb
            }
        }
    }
};

export default InfopanelMedKnapperContentType