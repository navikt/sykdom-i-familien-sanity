import * as React from 'react';
import PublishComponent from './PublishComponent';

const stagingPayload = {
    ref: 'master',
    environment: 'dev-sbs',
    auto_merge: false,
    required_contexts: [],
};

const productionPayload = {
    ref: 'master',
    environment: 'prod-sbs',
    auto_merge: false,
    required_contexts: [],
};

class AdminPage extends React.Component {
    render() {
        const token = this.props.document.published.githubToken;
        return (
            <div style={{ padding: '1rem' }}>
                <PublishComponent
                    title="Testmiljø - www-q0 (internt)"
                    data={stagingPayload}
                    description="Oppdater q-miljøet med alt innhold fra Sanity datasettet. Sider som ikke er lansert kommer også med."
                    url="https://www-q0.nav.no/familie/sykdom-i-familien/"
                    token={token}
                />
                <PublishComponent
                    title="Produksjon - www.nav.no"
                    data={productionPayload}
                    description="Oppdater www.nav.no med alt innhold som er publisert og merket med at det skal ut på nav.no."
                    url="https://familie.nav.no/sykdom-i-familien/"
                    token={token}
                />
            </div>
        );
    }
}

export default AdminPage;
