import React from 'react';

import ChannelCategory from '../ChannelCategory';

import style from './ChannelNavbar.module.css';

const ChannelNavbar = (props) => {
    return (
        <div className={style.ChannelNavbar}>
            <ChannelCategory channels={props.channels} name={'Test'} />
            <ChannelCategory channels={props.channels} name={'Test'} />
            <ChannelCategory channels={props.channels} name={'Test'} />
            <ChannelCategory channels={props.channels} name={'Test'} />
        </div>
    );
};

export default ChannelNavbar;
