import S from '@sanity/desk-tool/structure-builder';

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
                .title('Illustrasjoner')
                .child(S.documentTypeList('illustration')),
            S.listItem()
                .title('Illustrasjonskategorier')
                .child(S.documentTypeList('illustrationCategory')),
            S.listItem()
                .title('Lenker')
                .child(S.documentTypeList('link'))
        ]);
