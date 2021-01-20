import React from 'react';
import { Route, Switch } from 'react-router';

import style from './App.module.css';

import { ServerNavbar } from './components/ServerNavbar';
import Server from './containers/Server';

const App = () => {
    const channels1 = ['Channel S1 1', 'Channel S1 2', 'Channel S1 3'];
    const channels2 = ['Channel S2 1', 'Channel S2 2', 'Channel S2 3'];
    const channels3 = ['Channel S3 1', 'Channel S3 2', 'Channel S3 3'];

    return (
        <div className={style.App}>
            <ServerNavbar />

            <Switch>
                <Route path="/" exact>
                    <Server channels={channels1} name="Server 1" />
                </Route>
                <Route path="/server2">
                    <Server channels={channels2} name="Server 2" />
                </Route>
                <Route path="/server3">
                    <Server channels={channels3} name="Server 3" />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
