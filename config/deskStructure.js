import React from 'react';

import S from '@sanity/desk-tool/structure-builder';
import AdminPage from '../components/AdminPage';

import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import YtelsePageIcon from '../components/icons/YtelsePageIcon';
import AdminIcon from '../components/icons/AdminIcon';

import IframePreview from '../components/previews/iframe/IframePreview';
import IllustrationIcon from '../components/icons/IllustrationIcon';
import HomeIcon from '../components/icons/HomeIcon';

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
                )
                .icon(HomeIcon),
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
                )
                .icon(() => <YtelsePageIcon isPublic={true} />),
            S.listItem()
                .title('Spørsmål og svar')
                .child(
                    S.documentList()
                        .title('Spørsmål og svar sider')
                        .filter('_type == "customPage"')
                        .child((documentId) =>
                            S.document(document)
                                .documentId(documentId)
                                .schemaType('customPage')
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
                )
                .icon(() => <YtelsePageIcon isPublic={true} />),

            S.listItem()
                .title('Illustrasjoner')
                .child(S.documentTypeList('illustration'))
                .icon(IllustrationIcon),
            S.listItem()
                .title('Meldinger')
                .child(S.documentTypeList('message')),

            S.divider(),

            S.listItem()
                .title('Faktasider ikke tilgjengelig på nav.no')
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
                )
                .icon(() => <YtelsePageIcon isPublic={false} />),
            S.divider(),
            S.divider(),
            S.divider(),
            S.listItem()
                .title('Publisering')
                .child(
                    S.document(document)
                        .title('Publisering')
                        .documentId('settings-config')
                        .views([
                            S.view
                                .component(AdminPage)
                                .options({ previewURL, locale: 'nb' })
                                .title('Whoa')
                        ])
                )
                .icon(AdminIcon),
            S.divider(),
            S.divider(),
            S.divider(),
            S.listItem()
                .title('Annet')
                .child(
                    S.list('other')
                        .title('Kategorier')
                        .items([
                            S.listItem()
                                .title('Generelle sider')
                                .child(
                                    S.documentList()
                                        .title('Generelle sider')
                                        .filter('_type == "sectionPage"')
                                        .child((documentId) =>
                                            S.document(document)
                                                .documentId(documentId)
                                                .schemaType('sectionPage')
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
                                )
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('React komponenter')
                                .child(S.documentTypeList('customComponent')),
                            S.divider(),
                            S.divider(),
                            S.listItem()
                                .title('Illustrasjonskategorier')
                                .child(S.documentTypeList('illustrationCategory')),

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
                                .title('Lenker')
                                .child(S.documentTypeList('link')),
                            S.listItem()
                                .title('Config')
                                .child(
                                    S.editor()
                                        .title('Settings')
                                        .id('settings')
                                        .schemaType('settings')
                                        .documentId('settings-config')
                                        .views([
                                            S.view
                                                .form()
                                                .icon(EditIcon)
                                                .title('Redigering')
                                        ])
                                )
                        ])
                )
        ]);
