import * as React from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Button from 'part:@sanity/components/buttons/default';
import superagent from 'superagent';
import delay from 'lodash.delay';
import LoadingSpinner from 'part:@sanity/components/loading/spinner';

const triggerStagingBuild = (cb, errorCb) => {
    const url = 'https://api.github.com/repos/navikt/sykdom-i-familien/dispatches';
    superagent
        .post(url)
        .set('Accept', 'application/vnd.github.everest-preview+json')
        .set('Authorization', `token ${window.token}`)
        .send({ event_type: 'trigger_gatsby_build' })
        .then(() => {
            delay(cb, 2000);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));

            errorCb(`${error.response.error.status}: ${error.response.error.message}`);
        });
};

export default class PublishComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staging: false,
            done: false,
            error: undefined
        };
    }
    render() {
        const { staging, error, done } = this.state;
        return (
            <div style={{ padding: ' 1rem' }}>
                <Fieldset legend="Staging">
                    <p>Oppdater staging-miljøet med alt publisert innhold fra Sanity.</p>

                    <Button
                        style={{ width: '10rem', height: '2.5rem' }}
                        onClick={() => {
                            this.setState({ staging: true, error: undefined, done: false });
                            triggerStagingBuild(
                                () => this.setState({ staging: false, error: undefined, done: true }),
                                (error) => {
                                    this.setState({ staging: false }),
                                        this.setState({ staging: false, error, done: true });
                                }
                            );
                        }}
                        disabled={staging}>
                        {staging && (
                            <span>
                                <LoadingSpinner />
                            </span>
                        )}
                        {!staging && <span style={{ display: 'flex', flexWrap: 'nowrap' }}>Oppdater nå</span>}
                    </Button>

                    {error !== undefined && (
                        <p
                            style={{
                                padding: '1rem 2rem',
                                border: '1px solid #c0c0c0',
                                backgroundColor: '#f2f2f2',
                                borderRadius: '.2rem',
                                display: 'flex',
                                flexFlow: 'column',
                                minWidth: '20rem'
                            }}>
                            Det oppstod en feil under oppdateringen
                            <br />
                            <br />
                            <code>[{error}]</code>
                        </p>
                    )}
                    {!staging && done === true && error === undefined && (
                        <p
                            style={{
                                padding: '1rem 2rem',
                                border: '1px solid #c0c0c0',
                                backgroundColor: '#f2f2f2',
                                borderRadius: '.2rem',
                                display: 'flex',
                                flexFlow: 'column',
                                minWidth: '20rem'
                            }}>
                            Det oppstod en feil under oppdateringen. Last siden på nytt og prøv igjen.
                            <br />
                            <br />
                            <code>[{error}]</code>
                        </p>
                    )}
                </Fieldset>

                <Fieldset legend="Produksjon" style={{ marginTop: '2rem' }}>
                    <p>Publiser ny versjon til produksjon</p>
                    <Button disabled={true}>Legg ut ny versjon</Button>
                </Fieldset>
            </div>
        );
    }
}
