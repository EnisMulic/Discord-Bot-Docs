import React from 'react';

import ChannelCategory from '../ChannelCategory';

import style from './ChannelNavbar.module.css';

const ChannelNavbar = () => {
    const channels = ['Channel 1', 'Channel 2', 'Channel 3'];

    return (
        <div className={style.ChannelNavbar}>
            <ChannelCategory channels={channels} name={'Test'} />
            <ChannelCategory channels={channels} name={'Test'} />
            <ChannelCategory channels={channels} name={'Test'} />
        </div>
    );
};

export default ChannelNavbar;
