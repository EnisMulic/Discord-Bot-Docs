import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import style from './App.module.css';

import { ServerNavbar } from './components/ServerNavbar';
import Server from './containers/Server';

import servers from './store';

const App = () => {
    return (
        <div className={style.App}>
            <ServerNavbar
                servers={servers}
                style={{
                    overflowY: 'scroll',
                }}
            />
            <Switch>
                {servers.map((server) => {
                    const { id, name, image, categories } = server;
                    return (
                        <Route
                            key={id}
                            path={`/${name.replaceAll(' ', '-').toLowerCase()}`}
                        >
                            <Server categories={categories} name={name} />
                        </Route>
                    );
                })}
                <Redirect
                    from="/"
                    to={`/${servers[0].name
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                />
            </Switch>
        </div>
    );
};

export default App;
