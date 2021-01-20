import React from 'react';
import PropTypes from 'prop-types';

import ChannelNavbar from '../../components/ChannelNavbar';
import Chat from '../../components/Chat';
import UserNavbar from '../../components/UserNavbar';

const Server = (props) => {
    return (
        <>
            <ChannelNavbar channels={props.channels} serverName={props.name} />
            <Chat />
            <UserNavbar />
        </>
    );
};

Server.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default Server;
