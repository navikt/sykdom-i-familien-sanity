import * as React from 'react';
import PublishComponent from './PublishComponent';

const stagingPayload = {
    ref: 'staging',
    environment: 'dev-sbs',
    auto_merge: false,
    required_context: []
};

const productionPayload = {
    ref: 'master',
    environment: 'prod-sbs',
    auto_merge: false,
    required_context: []
};

export default class AdminPage extends React.Component {
    render() {
        return (
            <div style={{ padding: ' 1rem' }}>
                {/* <PublishComponent
                    title="Staging"
                    data={stagingPayload}
                    description="Oppdater staging-miljøet med alt publisert innhold fra Sanity staging datasettet."
                /> */}
                <PublishComponent
                    title="Produksjon"
                    data={productionPayload}
                    description="Oppdater produksjonsmiljøet med alt publisert innhold fra Sanity production datasettet."
                />
            </div>
        );
    }
}
