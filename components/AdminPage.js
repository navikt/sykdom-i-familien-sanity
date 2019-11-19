import * as React from 'react';
import PublishComponent from './PublishComponent';

const BuildEnvEventType = {
    staging: 'trigger_gatsby_build',
    production: 'trigger_gatsby_build_production'
};

export default class AdminPage extends React.Component {
    render() {
        return (
            <div style={{ padding: ' 1rem' }}>
                <PublishComponent
                    title="Staging"
                    data={{ event_type: BuildEnvEventType.staging }}
                    description="Oppdater staging-miljøet med alt publisert innhold fra Sanity staging datasettet."
                />
                <PublishComponent
                    title="Produksjon"
                    data={{ event_type: BuildEnvEventType.production }}
                    description="Oppdater produksjonsmiljøet med alt publisert innhold fra Sanity production datasettet."
                />
            </div>
        );
    }
}
