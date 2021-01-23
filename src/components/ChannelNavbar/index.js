import React from 'react';
import PropTypes from 'prop-types';

import ChannelCategory from '../ChannelCategory';

import style from './ChannelNavbar.module.css';

const ChannelNavbar = (props) => {
    return (
        <div className={style.ChannelNavbar}>
            <div className={style.Header}>
                <h4>{props.serverName}</h4>
            </div>
            <div className={style.Categories}>
                <ChannelCategory channels={props.channels} name={'Test'} />
                <ChannelCategory channels={props.channels} name={'Test'} />
                <ChannelCategory channels={props.channels} name={'Test'} />
                <ChannelCategory channels={props.channels} name={'Test'} />
            </div>
        </div>
    );
};

ChannelNavbar.propTypes = {
    serverName: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default ChannelNavbar;
