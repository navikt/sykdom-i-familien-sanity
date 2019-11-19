import * as React from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import Input from 'part:@sanity/components/textinputs/default';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Button from 'part:@sanity/components/buttons/default';
import superagent from 'superagent';
import delay from 'lodash.delay';
import LoadingSpinner from 'part:@sanity/components/loading/spinner';
import Message from './Message';

const triggerBuild = (data, token, cbSuccess, cbError) => {
    const url = 'https://api.github.com/repos/navikt/sykdom-i-familien/dispatches';
    superagent
        .post(url)
        .set('Accept', 'application/vnd.github.everest-preview+json')
        .set('Authorization', `token ${token}`)
        .send(data)
        .then(() => {
            delay(cbSuccess, 2000);
        })
        .catch((error) => {
            cbError(`${error.response.error.status}: ${error.response.error.message}`);
        });
};

export default class EnvPublish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false,
            done: false,
            error: undefined,
            token: ''
        };
    }
    render() {
        const { title, description, data } = this.props;
        const { pending, error, done, token } = this.state;

        const onSuccess = () => {
            this.setState({ pending: false, error: undefined, done: true });
        };

        const onError = (error) => {
            this.setState({ pending: false, error, done: true });
        };

        return (
            <Fieldset legend={title}>
                <p>{description}</p>
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
                                  this.setState({ pending: true, error: undefined, done: false });
                                  triggerBuild(data, token, onSuccess, onError);
                              }
                            : undefined
                    }
                    disabled={pending}>
                    {pending && (
                        <span>
                            <LoadingSpinner />
                        </span>
                    )}
                    {!pending && <span style={{ display: 'flex', flexWrap: 'nowrap' }}>Oppdater nå</span>}
                </Button>

                {pending !== true && (
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
        );
    }
}
