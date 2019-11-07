export const blockContentField = {
    title: 'Innhold',
    name: 'content',
    type: 'array',
    of: [
        { type: 'titleAndText' },
        { type: 'expandableContent' },
        {
            type: 'illustration'
        },
        { type: 'groupedContent' }
    ]
};
