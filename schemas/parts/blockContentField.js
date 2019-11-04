export const blockContentField = {
    title: 'Innhold',
    name: 'content',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [],
            lists: [],
            marks: {
                decorators: [],
                annotations: []
            }
        },
        { type: 'titleAndText' },
        { type: 'expandableContent' },
        {
            type: 'illustration'
        },
        { type: 'groupedContent' }
    ]
};
