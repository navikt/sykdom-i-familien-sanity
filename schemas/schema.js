import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import svgUploadPreview from 'sanity-plugin-inline-svg';

import documents from './documents';
import objects from './objects';
import localeObjects from './locale-objects';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([svgUploadPreview, ...documents, ...objects, ...localeObjects])
});
