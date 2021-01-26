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
                {props.categories.map((category) => {
                    const { id, name, channels } = category;
                    return (
                        <ChannelCategory
                            channels={channels}
                            name={name}
                            key={id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

ChannelNavbar.propTypes = {
    serverName: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default ChannelNavbar;
