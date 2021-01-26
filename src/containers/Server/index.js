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

    let channels = [];
    props.categories.map((category) => {
        channels = [...channels, ...category.channels];
        return 0;
    });

    return (
        <>
            <ChannelNavbar
                categories={props.categories}
                serverName={props.name}
            />
            <Switch>
                {channels.map((channel) => {
                    const { id, name, topic, messages, user_groups } = channel;
                    return (
                        <Route
                            key={id}
                            path={`${path}/${name
                                .replaceAll(' ', '-')
                                .toLowerCase()}`}
                        >
                            <Channel
                                name={name}
                                topic={topic}
                                messages={messages}
                                user_groups={user_groups}
                            />
                        </Route>
                    );
                })}

                <Redirect
                    to={`${path}/${props.categories[0].channels[0].name
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                />
            </Switch>
        </>
    );
};

Server.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.array,
};

export default withRouter(Server);
