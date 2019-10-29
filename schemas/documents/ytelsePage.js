const YtelsePage = {
    title: 'Faktaside',
    name: 'page',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Ytelse',
            name: 'ytelse',
            type: 'reference',
            to: { type: 'ytelse' }
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Illustrasjon',
            name: 'illustration',
            type: 'reference',
            to: { type: 'illustration' }
        },
        {
            title: 'Kort fortalt',
            name: 'inShort',
            type: 'localeRichText'
        },
        {
            title: 'Innholdsseksjoner',
            name: 'content',
            type: 'array',
            of: [{ type: 'section' }]
        }
    ]
};

export default YtelsePage;
