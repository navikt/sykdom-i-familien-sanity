const BlockContent = {
    title: 'Innhold',
    name: 'blockContent',
    type: 'object',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'localeString',
            validation: (Rule) =>
                Rule.custom((obj) => {
                    return validateLocaleString(obj, true);
                })
        },
        {
            title: 'Innhold',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'illustration'
                },
                { type: 'titleAndText' },
                { type: 'expandableContent' },
                { type: 'groupedContent' }
            ]
        }
    ]
};

export default BlockContent;
