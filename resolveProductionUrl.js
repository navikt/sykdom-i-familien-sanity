import { getSiteById } from './sites';

export default function resolveProductionUrl(document) {
    const site = getSiteById(document.site) || { path: '/' };
    return document && document.slug
        ? `https://preview-sykdomifamilien.gtsb.io/${site.path}${document.slug.current}`
        : undefined;
}
