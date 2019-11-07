export const shortenText = (text) => {
    if (text && typeof text === 'string' && text.length > 28) {
        return `${text.substr(0, 25)}...`;
    }
    return text;
};

export const toPlainText = (blocks = []) => {
    return (
        blocks
            // loop through each block
            .map((block) => {
                // if it's not a text block with children,
                // return nothing
                if (block._type !== 'block' || !block.children) {
                    return '';
                }
                // loop through the children spans, and join the
                // text strings
                return block.children.map((child) => child.text).join('');
            })
            // join the parapgraphs leaving split by two linebreaks
            .join('\n\n')
    );
};
