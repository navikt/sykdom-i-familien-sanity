import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import AdminPage from '../components/AdminPage';

export default () =>
    S.list()
        .title('Sykdom i familien')
        .items([
            S.listItem()
                .title('Forside')
                .child(
                    S.editor()
                        .title('Forside')
                        .id('frontpage')
                        .schemaType('frontpage')
                        .documentId('frontpage-config')
                ),
            S.listItem()
                .title('Faktasider')
                .child(S.documentTypeList('ytelsePage')),
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
                .title('Alle illustrasjoner')
                .child(S.documentTypeList('illustration')),
            S.listItem()
                .title('Illustrasjonskategorier')
                .child(S.documentTypeList('illustrationCategory')),
            S.listItem()
                .title('Lenker')
                .child(S.documentTypeList('link')),
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
                .child(S.documentTypeList('ytelse'))
        ]);
