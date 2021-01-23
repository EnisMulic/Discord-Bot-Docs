import React from 'react';
import PropTypes from 'prop-types';

import style from './ChannelButton.module.css';
import { ReactComponent as ChannelIcon } from '../../assets/channel-icon.svg';

const ChannelButton = (props) => {
    return (
        <div className={style.ChannelButton}>
            <ChannelIcon />
            <p>{props.name.replaceAll(' ', '-').toLowerCase()}</p>
        </div>
    );
};

ChannelButton.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ChannelButton;
