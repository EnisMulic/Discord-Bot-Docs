import React from 'react';

import style from './App.module.css';
import ChannelCategory from './components/ChannelCategory';

const App = () => {
    const channels = ['Channel 1', 'Channel 2', 'Channel 3'];
    return (
        <div className={style.App}>
            <ChannelCategory channels={channels} name={'Test'} />
            <ChannelCategory channels={channels} name={'Test'} />
            <ChannelCategory channels={channels} name={'Test'} />
        </div>
    );
};

export default App;
