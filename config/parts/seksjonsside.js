import S from '@sanity/desk-tool/structure-builder';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

import IframePreview from '../../components/previews/iframe/IframePreview';

const remoteURL = 'https://sykdom-i-familien-1131286467.gtsb.io';
const previewURL = remoteURL;

const getSeksjonssiderPart = (site, title) =>
    S.documentList()
        .title(title)
        .filter(`_type == "sectionPage" && site == "${site}"`)
        .child((documentId) =>
            S.document(document)
                .documentId(documentId)
                .schemaType('sectionPage')
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

export default getSeksjonssiderPart;
