import React from 'react';
import PropTypes from 'prop-types';

import ChannelNavbar from '../../components/ChannelNavbar';
import Channel from '../Channel';

const Server = (props) => {
    return (
        <>
            <ChannelNavbar channels={props.channels} serverName={props.name} />
            <Channel />
        </>
    );
};

Server.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default Server;
