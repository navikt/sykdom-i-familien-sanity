const Ytelse = {
    title: 'Ytelse',
    name: 'ytelse',
    type: 'document',

    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Kode',
            name: 'key',
            type: 'string'
        },
        {
            title: 'Lenke til søknadsskjema',
            name: 'formUrl',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ]
};

export default Ytelse;
