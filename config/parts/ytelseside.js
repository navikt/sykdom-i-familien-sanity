import S from '@sanity/desk-tool/structure-builder';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

import IframePreview from '../../components/previews/iframe/IframePreview';
import { previewURL } from '../common';

const getYtelsesiderPart = (site, title, isPublic = true) =>
    S.documentList()
        .title(title)
        .filter(
            `_type == "ytelsePage" && isPublic == ${isPublic}${site ? `&& site == "${site}"` : ' && !defined(site)'}`
        )
        .child((documentId) =>
            S.document(document)
                .documentId(documentId)
                .schemaType('ytelsePage')
                .views([
                    S.view.form().icon(EditIcon).title('Redigering'),
                    S.view
                        .component(IframePreview)
                        .options({ previewURL, locale: 'nb' })
                        .title('Forhåndsvisning NB')
                        .icon(EyeIcon),
                    S.view
                        .component(IframePreview)
                        .options({ previewURL, locale: 'nn' })
                        .title('Forhåndsvisning NN')
                        .icon(EyeIcon),
                ])
        );

export default getYtelsesiderPart;
