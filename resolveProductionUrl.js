export default function resolveProductionUrl(document) {
    return `https://sykdom-i-familien-preview.herokuapp.com/nb/${document.slug.current}`;
}
