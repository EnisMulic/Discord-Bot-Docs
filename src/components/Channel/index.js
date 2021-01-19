import React from 'react';
import PropTypes from 'prop-types';

import style from './Channel.module.css';
import { ReactComponent as ChannelIcon } from '../../assets/channel-icon.svg';

const Channel = (props) => {
    return (
        <div className={style.Channel}>
            <ChannelIcon />
            <p>{props.name}</p>
        </div>
    );
};

Channel.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Channel;
