import S from '@sanity/desk-tool/structure-builder';
import AdminPage from '../components/AdminPage';

import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

import IframePreview from '../components/previews/iframe/IframePreview';

const remoteURL = 'https://sykdom-i-familien-1131286467.gtsb.io';
const previewURL = remoteURL;

export default () =>
    S.list()
        .title('Sykdom i familien')
        .items([
            S.listItem()
                .title('Forsiden')
                .child(
                    S.editor()
                        .title('Forside - nav.no')
                        .id('frontpage')
                        .schemaType('frontpage')
                        .documentId('frontpage-config')
                        .views([
                            S.view
                                .form()
                                .icon(EditIcon)
                                .title('Redigering'),
                            S.view
                                .component(IframePreview)
                                .options({ previewURL, isFrontpage: true, locale: 'nb' })
                                .title('Forhåndsvisning NB')
                                .icon(EyeIcon),
                            S.view
                                .component(IframePreview)
                                .options({ previewURL, isFrontpage: true, locale: 'nn' })
                                .title('Forhåndsvisning NN')
                                .icon(EyeIcon)
                        ])
                ),
            S.listItem()
                .title('Faktasider')
                .child(
                    S.documentList()
                        .title('Faktasider - nav.no')
                        .filter('_type == "ytelsePage" && isPublic == true')
                        .child((documentId) =>
                            S.document(document)
                                .documentId(documentId)
                                .schemaType('ytelsePage')
                                .views([
                                    S.view
                                        .form()
                                        .icon(EditIcon)
                                        .title('Redigering'),
                                    S.view
                                        .component(IframePreview)
                                        .options({ previewURL, locale: 'nb' })
                                        .title('Forhåndsvisning NB')
                                        .icon(EyeIcon),
                                    S.view
                                        .component(IframePreview)
                                        .options({ previewURL, locale: 'nn' })
                                        .title('Forhåndsvisning NN')
                                        .icon(EyeIcon)
                                ])
                        )
                ),
            S.divider(),
            S.listItem()
                .title('Nye faktasider (ikke lansert på nav.no)')
                .child(
                    S.documentList()
                        .title('Kladd')
                        .filter('_type == "ytelsePage" && isPublic != true')
                        .child((documentId) =>
                            S.document(document)
                                .documentId(documentId)
                                .schemaType('ytelsePage')
                                .views([
                                    S.view
                                        .form()
                                        .icon(EditIcon)
                                        .title('Redigering'),
                                    S.view
                                        .component(IframePreview)
                                        .options({ previewURL, locale: 'nb' })
                                        .title('Forhåndsvisning NB')
                                        .icon(EyeIcon),
                                    S.view
                                        .component(IframePreview)
                                        .options({ previewURL, locale: 'nn' })
                                        .title('Forhåndsvisning NN')
                                        .icon(EyeIcon)
                                ])
                        )
                ),
            S.divider(),
            S.listItem()
                .title('Illustrasjoner')
                .child(S.documentTypeList('illustration')),
            S.divider(),

            S.listItem()
                .title('Administrasjon')
                .child(
                    S.component()
                        .title('Forhåndsvisning og produksjon')
                        .component(AdminPage)
                ),
            S.listItem()
                .title('Ytelser')
                .child(S.documentTypeList('ytelse')),
            S.listItem()
                .title('Illustrasjoner etter kategori')
                .child(
                    S.documentList()
                        .title('Kategorier')
                        .menuItems(
                            S.documentTypeList('illustrationCategory').getMenuItems(),
                            S.documentTypeList('illustration').getMenuItems()
                        )
                        .filter('_type == $type && !defined(parents)')
                        .params({ type: 'illustrationCategory' })
                        .child((categoryId) =>
                            S.documentList()
                                .title('Illustrasjoner')
                                .menuItems(S.documentTypeList('illustration').getMenuItems())
                                .filter('_type == $type && $categoryId == category._ref')
                                .params({ type: 'illustration', categoryId })
                        )
                ),
            S.listItem()
                .title('Illustrasjonskategorier')
                .child(S.documentTypeList('illustrationCategory')),
            S.listItem()
                .title('Lenker')
                .child(S.documentTypeList('link'))
        ]);
