export default function resolveProductionUrl(document) {
    return document && document.slug
        ? `https://sykdom-i-familien-1131286467.gtsb.io/nb/${document.slug.current}`
        : undefined;
}
