/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './iframePreview.css';
import { getSiteById } from '../../../sites';

const assembleProjectUrl = ({ displayed, options }) => {
    const { slug, site } = displayed || {};
    const { previewURL, locale = 'nb', isFrontpage } = options;
    const siteInfo = getSiteById(site) || { path: '' };

    if (isFrontpage) {
        return `${previewURL}/${locale}/${siteInfo.path}`;
    }

    const url = slug ? `${previewURL}/${locale}/${siteInfo.path}/${slug.current}` : undefined;
    return url;
};

class IframePreview extends React.PureComponent {
    static propTypes = {
        document: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    };

    static defaultProps = {
        document: null,
    };

    render() {
        const { options } = this.props;
        const { displayed } = this.props.document;
        if (!displayed) {
            return (
                <div className={styles.componentWrapper}>
                    <p>There is no document to preview</p>
                </div>
            );
        }

        const url = assembleProjectUrl({ displayed, options });

        if (!url) {
            return (
                <div className={styles.componentWrapper}>
                    <p>Hmm. Having problems constructing the web front-end URL.</p>
                </div>
            );
        }

        return (
            <div className={styles.componentWrapper}>
                <div className={styles.iframeContainer}>
                    <iframe src={url} frameBorder={'0'} />
                </div>
            </div>
        );
    }
}

export default IframePreview;
