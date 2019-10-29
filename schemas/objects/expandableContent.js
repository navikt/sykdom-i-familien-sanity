const ExpandableContent = {
    title: 'Ekspanderbart innhold',
    name: 'expandableContent',
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
            type: 'blockContent'
        }
    ]
};

export default ExpandableContent;
