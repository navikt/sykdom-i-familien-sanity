import S from '@sanity/desk-tool/structure-builder';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

import IframePreview from '../../components/previews/iframe/IframePreview';
import { previewURL } from '../common';

const getForsidePart = (title, documentId, id) =>
    S.editor()
        .title(title)
        .id(id)
        .schemaType('frontpage')
        .documentId(documentId)
        .views([
            S.view.form().icon(EditIcon).title('Redigering'),
            S.view
                .component(IframePreview)
                .options({ previewURL, isFrontpage: true, locale: 'nb' })
                .title('Forhåndsvisning NB')
                .icon(EyeIcon),
            S.view
                .component(IframePreview)
                .options({ previewURL, isFrontpage: true, locale: 'nn' })
                .title('Forhåndsvisning NN')
                .icon(EyeIcon),
        ]);

export default getForsidePart;
