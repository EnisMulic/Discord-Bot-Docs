import React from 'react';
import PropTypes from 'prop-types';

import ChannelButton from '../ChannelButton';

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
                return <ChannelButton name={channel} key={index} />;
            })}
        </div>
    );
};

ChannelCategory.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default ChannelCategory;
