import React from 'react';
import PropTypes from 'prop-types';

import style from './ChannelCategory.module.css';
import Channel from '../Channel';

const ChannelCategory = (props) => {
    return (
        <div className={style.ChannelCategory}>
            <h5>{props.name}</h5>
            {props.channels.map((channel, index) => {
                return <Channel name={channel} key={index} />;
            })}
        </div>
    );
};

ChannelCategory.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default ChannelCategory;
