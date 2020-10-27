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

import getForsidePart from './parts/forside';
import getYtelsesiderPart from './parts/ytelseside';
import getSeksjonssiderPart from './parts/seksjonsside';
import getGenerelleSiderPart from './parts/generell-side';
import { SITES } from '../schemas/fields/siteField';

export default () =>
    S.list()
        .title('Nettsteder')
        .items([
            S.listItem()
                .title('Sykdom i familien (hoved)')
                .child(
                    S.list()
                        .title('Sider - sykdom i familien')
                        .items([
                            S.listItem()
                                .title('Forsiden')
                                .child(getForsidePart('Forside - nav.no', 'frontpage-config', 'frontpage-config'))
                                .icon(HomeIcon),
                            S.listItem()
                                .title('Faktasider')
                                .child(getYtelsesiderPart(SITES.sif.id, 'Faktasider - nav.no'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('Spørsmål og svar')
                                .child(getGenerelleSiderPart(SITES.sif.id, 'Spørsmål og svar sider'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('Andre sider')
                                .child(getSeksjonssiderPart(undefined, 'Andre sider'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('Sider ikke tilgjengelig på nav.no')
                                .child(
                                    getYtelsesiderPart(SITES.sif.id, 'Faktasider ikke tilgjengelig på nav.no', false)
                                )
                                .icon(() => <YtelsePageIcon isPublic={false} />),
                        ])
                ),
            S.listItem()
                .title('Arbeidsgiver')
                .child(
                    S.list()
                        .title('Arbeidsgiver')
                        .items([
                            S.listItem()
                                .title('Forside')
                                .child(
                                    getForsidePart(
                                        'Forside - arbeidsgiver',
                                        'frontpage-config-arbeidsgiver',
                                        'frontpage-config-arbeidsgiver'
                                    )
                                )
                                .icon(HomeIcon),
                            S.listItem()
                                .title('Undersider')
                                .child(getSeksjonssiderPart(SITES.arbeidsgiver.id, 'Undersider'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                        ])
                ),

            S.listItem()
                .title('Samarbeid')
                .child(
                    S.list()
                        .title('Samarbeid')
                        .items([
                            S.listItem()
                                .title('Forside')
                                .child(getForsidePart('Forside - samarbeid', 'frontpage-config-samarbeid'))
                                .icon(HomeIcon),
                            S.listItem()
                                .title('Undersider')
                                .child(getSeksjonssiderPart(SITES.samarbeid.id, 'Undersider'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                        ])
                ),

            S.divider(),
            S.listItem()
                .title('Fellesinnhold')
                .child(
                    S.list()
                        .title('Sider - sykdom i familien')
                        .items([
                            S.listItem()
                                .title('Illustrasjoner')
                                .child(S.documentTypeList('illustration'))
                                .icon(IllustrationIcon),
                            S.listItem().title('Meldinger').child(S.documentTypeList('message')),
                            S.listItem()
                                .title('Annet')
                                .child(
                                    S.list('other')
                                        .title('Kategorier')
                                        .items([
                                            S.listItem()
                                                .title('Illustrasjonskategorier')
                                                .child(S.documentTypeList('illustrationCategory')),

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
                                                                .menuItems(
                                                                    S.documentTypeList('illustration').getMenuItems()
                                                                )
                                                                .filter(
                                                                    '_type == $type && $categoryId == category._ref'
                                                                )
                                                                .params({ type: 'illustration', categoryId })
                                                        )
                                                ),
                                            S.listItem().title('Lenker').child(S.documentTypeList('link')),
                                        ])
                                ),
                        ])
                ),

            S.divider(),

            S.listItem()
                .title('System/teknisk oppsett')
                .child(
                    S.list()
                        .title('System/teknisk oppsett')
                        .items([
                            S.listItem().title('React komponenter').child(S.documentTypeList('customComponent')),
                            S.listItem().title('Ytelser').child(S.documentTypeList('ytelse')),
                            S.listItem()
                                .title('Config')
                                .child(
                                    S.editor()
                                        .title('Settings')
                                        .id('settings')
                                        .schemaType('settings')
                                        .documentId('settings-config')
                                        .views([S.view.form().icon(EditIcon).title('Redigering')])
                                ),
                            S.listItem()
                                .title('Ytelsessider uten site')
                                .child(getYtelsesiderPart(undefined, 'Ytelsessider uten site'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('Seksjonssider uten site')
                                .child(getSeksjonssiderPart(undefined, 'Seksjonssider uten site'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                            S.listItem()
                                .title('Andre sider uten site')
                                .child(getGenerelleSiderPart(undefined, 'Andre sider uten site'))
                                .icon(() => <YtelsePageIcon isPublic={true} />),
                        ])
                ),

            S.divider(),
            S.divider(),
            S.divider(),
            S.listItem()
                .title('Publisering')
                .child(
                    S.document(document)
                        .title('Publisering')
                        .documentId('settings-config')
                        .views([S.view.component(AdminPage).options({ previewURL, locale: 'nb' }).title('Whoa')])
                )
                .icon(AdminIcon),
            S.divider(),
            S.divider(),
            S.divider(),
        ]);
