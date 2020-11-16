import { previewURL } from './config/common';
import { getSiteById } from './sites';

export default function resolveProductionUrl(document) {
    const site = getSiteById(document.site) || { path: '' };
    return document && document.slug ? `${previewURL}/${site.path}/${document.slug.current}` : undefined;
}
