import * as React from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import Input from 'part:@sanity/components/textinputs/default';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Button from 'part:@sanity/components/buttons/default';
import superagent from 'superagent';
import delay from 'lodash.delay';
import LoadingSpinner from 'part:@sanity/components/loading/spinner';

const triggerStagingBuild = (token, cbSuccess, cbError) => {
    const url = 'https://api.github.com/repos/navikt/sykdom-i-familien/dispatches';
    superagent
        .post(url)
        .set('Accept', 'application/vnd.github.everest-preview+json')
        .set('Authorization', `token ${token}`)
        .send({ event_type: 'trigger_gatsby_build' })
        .then(() => {
            delay(cbSuccess, 2000);
        })
        .catch((error) => {
            cbError(`${error.response.error.status}: ${error.response.error.message}`);
        });
};

const Message = ({ children }) => (
    <div
        style={{
            margin: '1rem 0',
            padding: '1rem 2rem',
            border: '1px solid #c0c0c0',
            backgroundColor: '#f2f2f2',
            borderRadius: '.2rem',
            display: 'flex',
            flexFlow: 'column',
            minWidth: '20rem'
        }}>
        {children}
    </div>
);

export default class PublishComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staging: false,
            done: false,
            error: undefined,
            token: ''
        };
    }
    render() {
        const { staging, error, done, token } = this.state;

        const onSuccess = () => {
            this.setState({ staging: false, error: undefined, done: true });
        };

        const onError = (error) => {
            this.setState({ staging: false, error, done: true });
        };

        console.log(staging, error);

        return (
            <div style={{ padding: ' 1rem' }}>
                <Fieldset legend="Staging">
                    <p>Oppdater staging-miljøet med alt publisert innhold fra Sanity.</p>
                    <div style={{ marginBottom: '1rem' }}>
                        <FormField label="Token">
                            <Input
                                id="token_input"
                                type="text"
                                value={token}
                                onChange={(evt) => this.setState({ token: evt.target.value })}
                            />
                        </FormField>
                    </div>
                    <Button
                        style={{ width: '10rem', height: '2.5rem' }}
                        onClick={
                            token && token !== ''
                                ? () => {
                                      this.setState({ staging: true, error: undefined, done: false });
                                      triggerStagingBuild(token, onSuccess, onError);
                                  }
                                : undefined
                        }
                        disabled={staging}>
                        {staging && (
                            <span>
                                <LoadingSpinner />
                            </span>
                        )}
                        {!staging && <span style={{ display: 'flex', flexWrap: 'nowrap' }}>Oppdater nå</span>}
                    </Button>

                    {staging !== true && (
                        <>
                            {error !== undefined && (
                                <Message>
                                    <p>Det oppstod en feil under oppdateringen}</p>
                                    <code>[{error}]</code>
                                </Message>
                            )}
                            {done === true && error === undefined && (
                                <Message>Ny versjon er på vei ut. Dette kan ta opp til ett minutt.</Message>
                            )}
                        </>
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
