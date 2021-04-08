import React from 'react';

const PDF = {
    title: 'PDF vedlegg',
    name: 'pdf',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'PDF-dokument',
            name: 'file',
            type: 'file',
        },
    ],
    options: {
        storeOriginalFilename: true,
        accept: ['.pdf'],
    },
    preview: {
        select: {
            name: 'name',
            file: 'file',
        },
        prepare({ name }) {
            return {
                title: name,
            };
        },
    },
};

export default PDF;
