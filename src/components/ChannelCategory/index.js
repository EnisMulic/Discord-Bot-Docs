import React from 'react';
import PropTypes from 'prop-types';

import Channel from '../Channel';

import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

import style from './ChannelCategory.module.css';

const ChannelCategory = (props) => {
    return (
        <div className={style.ChannelCategory}>
            <div className={style.Header}>
                <DownArrow />
                <p>{props.name}</p>
            </div>
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
