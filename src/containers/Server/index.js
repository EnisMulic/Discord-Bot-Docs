import React from 'react';
import PropTypes from 'prop-types';

import ChannelNavbar from '../../components/ChannelNavbar';
import Channel from '../Channel';
import {
    Redirect,
    Route,
    Switch,
    useRouteMatch,
    withRouter,
} from 'react-router';

const Server = (props) => {
    const { path } = useRouteMatch();

    return (
        <>
            <ChannelNavbar channels={props.channels} serverName={props.name} />
            <Switch>
                {props.channels.map((channel) => (
                    <Route
                        path={`${path}/${channel
                            .replaceAll(' ', '-')
                            .toLowerCase()}`}
                    >
                        <Channel name={channel} />
                    </Route>
                ))}
                <Redirect
                    to={`${path}/${props.channels[0]
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                />
            </Switch>
        </>
    );
};

Server.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default withRouter(Server);
