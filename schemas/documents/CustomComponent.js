const CustomComponent = {
    title: 'React komponent',
    name: 'customComponent',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Identifikator',
            description: 'Referanse som brukes i koden til å inkludere riktig komponent',
            name: 'componentId',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: {
            name: 'name',
            componentId: 'componentId'
        },
        prepare({ name, componentId }) {
            return {
                title: name,
                subtitle: componentId
            };
        }
    }
};

export default CustomComponent;
