import React from 'react';
import { VscFilePdf } from 'react-icons/vsc';

export default {
    name: 'pdfLink',
    type: 'object',
    title: 'PDF lenke',
    icon: VscFilePdf,
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [{ type: 'pdf' }],
        },
    ],
};
