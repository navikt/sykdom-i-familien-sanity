const TitleAndText = {
    title: 'Tittel og tekst',
    name: 'titleAndText',
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
            type: 'localeRichText'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(values) {
            return {
                title: values.title.nb
            };
        }
    }
};

export default TitleAndText;
